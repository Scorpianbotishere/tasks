import { NavLink } from 'react-router-dom'
import '../index.css'
function Register() {
  return (
    <div className='main_form'>
        <h1>Welcome , Lets Register</h1>
        <form>
            <div className='form_group'>
                <label htmlFor="user_name"></label>
                <input type="text" placeholder='Full Name' />
            </div>
            <div className='form_group'>
                <label htmlFor="user_email"></label>
                <input type="email" placeholder='User Email Address'/>
            </div>
            <div className='form_group'>
                <label htmlFor="user_password"></label>
                <input type="text" placeholder='Chose Password' />
            </div>
            <div className='form_group'>
                <label htmlFor="user_c_password"></label>
                <input type="password" placeholder='Cofirm Password'/>
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