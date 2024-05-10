import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteDone } from '../utils/dataSlice';
const DoneCard = (props) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteDone(props.name));
 }
  return (
    <div className="flex items-center justify-between border border-black bg-green-400 text-black min-h-[40px] my-1">
      <div className="w-auto p-1 ">
        <h1 className="line-through">{props.name}</h1>
      </div>
      <div className="flex w-[40px] items-center justify-center">
        <button className="text-2xl">
          <MdDelete onClick={handleDelete} />
        </button>
      </div>
    </div>
  );
}

export default DoneCard