import React, { useState, useEffect } from 'react';
import Task from '../components/Task';

function Home() {
  const [liveTasks, setLiveTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch tasks
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5200/api/tasks', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const data = await response.json();
        setLiveTasks(data.tasks.filter(task => task.status === 'not-completed'));
        setDoneTasks(data.tasks.filter(task => task.status === 'completed'));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchTasks function
    fetchTasks();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="main_content">
      <div className="task_cat">
        <h4>Live</h4>
        {loading && <p>Loading tasks...</p>}
        {error && <p>Error: {error}</p>}
        <div className="tasks">
          {liveTasks.map(task => (
            <Task key={task._id} task={task} />
          ))}
        </div>
      </div>

      <div className="task_cat">
        <h4>Done</h4>
        {loading && <p>Loading tasks...</p>}
        {error && <p>Error: {error}</p>}
        <div className="tasks">
          {doneTasks.map(task => (
            <Task key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
