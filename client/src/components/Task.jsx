import { useState } from "react"

function Task() {
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
        <h5>This is the Title of Task</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae totam corrupti consequuntur atque consectetur tempore id quis quae animi debitis earum porro, mollitia iure ducimus? Incidunt, libero. A, quaerat delectus.</p>
        <h6>End Data : 8/3/2024</h6>
    </div>
  )
}

export default Task