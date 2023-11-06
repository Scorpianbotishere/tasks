import React from 'react'

function Create() {
  return (
    <div className='main_form'>
    <h1>Welcome , Lets Register</h1>
    <form>
        <div className='form_group'>
            <label htmlFor="user_occopation"></label>
            <input type="text" placeholder='Write Task Name'/>
        </div>
        <div className='form_group'>
            <label htmlFor="user_password"></label>
            <textarea type="text" placeholder='Write Description about your Task' ></textarea>
        </div>
        <div className='form_group'>
            <label htmlFor="user_c_password">Start Date</label>
            <input type="date" placeholder='Cofirm Password'/>
        </div>
        <div className='form_group'>

            <input type="submit" value="Create"/>
        </div>
    </form>
</div>
  )
}

export default Create