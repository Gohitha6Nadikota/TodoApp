import React from 'react'
import { useSelector } from "react-redux"
import DoneCard from './DoneCard';
const DoneComponent = () => {
    const doneTasks = useSelector((store) => store.data.done);
  return (
    <div className="m-3">
      {doneTasks &&
        doneTasks.map((task) => <DoneCard key={task} name={task} />)}
    </div>
  );
}

export default DoneComponent