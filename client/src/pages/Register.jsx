import { NavLink ,useNavigate} from 'react-router-dom'
import '../index.css'
import { useState } from 'react';
function Register() {
    const navigate = useNavigate(); // Hook from react-router-dom for navigation
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            // Password and confirmPassword don't match
            window.alert('Password and Confirm Password do not match');
            // You can also set an error state or display a message to the user
            return;
        }

        try {
            // Make a POST request to your backend API
            const response = await fetch('http://localhost:5200/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Registration successful
                console.log('Registration successful');
                window.alert('Registration successful');
                // Redirect to the login page
                navigate('/login');
            } else {
                // Handle error scenarios
                console.error('Registration failed');
                window.alert('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            window.alert('Error during registration');
        }
    };


  return (
    <div className='main_form'>
        <h1>Welcome , Lets Register</h1>
        <form onSubmit={handleSubmit}>
            <div className='form_group'>
                <label htmlFor="user_name"></label>
                <input type='text' placeholder='Full Name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                
                />
            </div>
            <div className='form_group'>
                <label htmlFor="user_email"></label>
                <input type="email" placeholder='User Email Address' 
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                />
            </div>
            <div className='form_group'>
                <label htmlFor="user_password"></label>
                <input type="text" placeholder='Chose Password' 
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange} 
                />
            </div>
            <div className='form_group'>
                <label htmlFor="user_c_password"></label>
                <input type="password" placeholder='Cofirm Password'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange} 
                />
            </div>
            <div className='form_group'>
                 <p>Already have an account <NavLink to='/login'>Login here</NavLink></p>
            </div>
            <div className='form_group'>
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>
  )
}

export default Register