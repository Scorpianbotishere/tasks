import { NavLink } from "react-router-dom"

function Login() {
  return (
    <div className='main_form'>
    <h1>Welcome Back, Lets Continue</h1>
    <form>
        <div className='form_group'>
            <label htmlFor="user_email"></label>
            <input type="email" placeholder='Enter Email Address'/>
        </div>
        <div className='form_group'>
            <label htmlFor="user_c_password"></label>
            <input type="password" placeholder='Enter Password'/>
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