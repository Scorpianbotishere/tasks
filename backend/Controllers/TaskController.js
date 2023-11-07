const Task = require('../Models/TaskModel'); // Assuming the path to your Task model

const get_Tasks = async (req, res) => {
    try {

        const {userId} = req.user
        // Fetch all tasks from the database
        const tasks = await Task.find({user : userId});
        console.log(userId)
        // Send the tasks as a JSON response
        res.json({
            success: true,
            tasks: tasks,
        });
    } catch (error) {
        console.error('Error getting tasks:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
};

const create_Task = async (req, res) => {
    try {
        // Assuming you have a middleware to extract user information from the request (e.g., req.user)
        const {userId} = req.user;
        console.log(userId)
        // Create a new task based on the request body
        const newTask = new Task({
            user: userId,
            name: req.body.taskName,
            description: req.body.description,
            startdate: req.body.startDate,
            status: req.body.status,
        });

        // Save the new task to the database
        const savedTask = await newTask.save();

        // Send the saved task as a JSON response
        res.status(201).json({
            success: true,
            task: savedTask,
        });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
};


module.exports = {
    get_Tasks,
    create_Task,
};
