const bcrypt = require('bcrypt');
const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken')
const register_User = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // If the email already exists, respond with a conflict status
            return res.status(409).json({
                success: false,
                error: 'Email already exists',
            });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance with the hashed password
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Respond to the client with the saved user
        res.status(201).json({
            success: true,
            user: savedUser,
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
};

const login_User = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user in the database based on the provided email
        const user = await User.findOne({ email });

        if (!user) {
            // If the user is not found, respond with an unauthorized status
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials',
            });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            // If the passwords do not match, respond with an unauthorized status
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials',
            });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        // Respond to the client with the JWT token
        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
};
const get_User = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Find the user in the database based on the provided name and email
        const user = await User.findOne({ name, email });

        if (!user) {
            // If the user is not found, respond with a not found status
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }

        // Respond to the client with the retrieved user's name and email
        res.status(200).json({
            success: true,
            userName: user.name,
            userEmail: user.email,
        });
    } catch (error) {
        console.error('Error getting user:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
};

module.exports = {
    register_User,
    login_User,
    get_User
}