import React from 'react'

function Register() {
  return (
    <div className='main_register'>
        <form>
            <div className='form-group'>
                <label htmlFor="user_name">User Full Name</label>
                <input type="text" />
            </div>
            <div className='form-group'>
                <label htmlFor="user_email">User Email Address</label>
                <input type="email" />
            </div>
            <div className='form-group'>
                <label htmlFor="user_occopation">Working as</label>
                <input type="text" />
            </div>
            <div className='form-group'>
                <label htmlFor="user_password">Working as</label>
                <input type="text" />
            </div>
            <div className='form-group'>
                <label htmlFor="user_c_password">Working as</label>
                <input type="password" />
            </div>
            <div className='form-group'>
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>
  )
}

export default Register