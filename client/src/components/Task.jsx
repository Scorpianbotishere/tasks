import { useState } from "react"

function Task(props) {
    console.log(props.task)
    const [taskOptionStatus,setTaskOptionStatus] = useState(false)
    const taskPtions = ()=> {
        setTaskOptionStatus((pre) => pre =!pre)
        console.log(taskOptionStatus)
    }

  return (
    <div className='task'>
        <span className="task_options" onClick={taskPtions}>&#10247;</span>
        {taskOptionStatus && <div className="task_Operations">
            <ul>
                <li>View Task</li>
                <li>Edit Task</li>
                <li>Delete Task</li>
            </ul>
        </div>}
        <h5>{props.task.name}</h5>
        <p>{props.task.description}</p>
        <h6>{props.task.startdate}</h6>
    </div>
  )
}

export default Task