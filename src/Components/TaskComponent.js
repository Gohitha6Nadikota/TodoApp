import React from 'react'
import TaskCard from './TaskCard'
import { useSelector } from 'react-redux'
const TaskComponent = () => {
    const ourTasks = useSelector((store) => store.data.tasks);
    return <div className="m-3">{ourTasks && ourTasks.map((task) => ( <TaskCard name={task} key={task} /> ))}</div>;
}

export default TaskComponent