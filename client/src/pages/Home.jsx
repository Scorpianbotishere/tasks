import Task from "../components/Task"

function Home() {
  return (
    <div className="main_content">
      <div className="task_cat">
        <h4>Live</h4>
        <div className="tasks">
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>

      <div className="task_cat">
        <h4>Upcoming</h4>
        <div className="tasks">
          <Task />
          <Task />
        </div>
      </div>

      <div className="task_cat">
   
        <h4>Done</h4>
        <div className="tasks">
          <Task />
          <Task />
        </div>
      </div>
    </div>
  )
}

export default Home