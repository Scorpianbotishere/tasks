import { useState } from 'react';

function Create() {
  const [formData, setFormData] = useState({
    taskName: '',
    description: '',
    startDate: '',
    status: 'not-completed',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API
      const response = await fetch('http://localhost:5200/api/tasks/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Assuming you have a token stored in localStorage
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Task creation successful
        alert('Task created successfully');
      } else {
        // Handle error scenarios
        alert('Task creation failed');
      }
    } catch (error) {
      console.error('Error during task creation:', error);
    }
  };

  return (
    <div className='main_form'>
      <h1>Welcome, Let's Register</h1>
      <form onSubmit={handleSubmit}>
        <div className='form_group'>
          <label htmlFor="user_occopation">Task Name</label>
          <input
            type="text"
            placeholder='Write Task Name'
            name='taskName'
            value={formData.taskName}
            onChange={handleChange}
          />
        </div>
        <div className='form_group'>
          <label htmlFor="user_password">Description</label>
          <textarea
            type="text"
            placeholder='Write Description about your Task'
            name='description'
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='form_group'>
          <label htmlFor="start_Date">Start Date</label>
          <input
            type="date"
            placeholder='Start Date'
            name='startDate'
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className='form_group'>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
}

export default Create;
