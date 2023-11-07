import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate(); // Hook from react-router-dom for navigation
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your backend API for login
            const response = await fetch('http://localhost:5200/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Login successful
                const data = await response.json();
                
                // Save the JWT token in local storage
                localStorage.setItem('jwtToken', data.token);

                // Redirect to the home page
                navigate('/');
            } else {
                // Handle login failure scenarios
                console.error('Login failed');
                window.alert('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            window.alert('Error during login');
        }
    };
  return (
    <div className='main_form'>
    <h1>Welcome Back, Lets Continue</h1>
    <form onSubmit={handleLogin}>
        <div className='form_group'>
            <label htmlFor="user_email"></label>
            <input type="email" placeholder='Enter Email Address'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
            />
        </div>
        <div className='form_group'>
            <label htmlFor="user_c_password"></label>
            <input type="password" placeholder='Enter Password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
            />
        </div>
        <div className='form_group'>
            <p>Do not have an account <NavLink to='/register'>Register here</NavLink></p>
        </div>
        <div className='form_group'>
            <input type="submit" value="Login"/>
        </div>
    </form>
</div>
  )
}

export default Login