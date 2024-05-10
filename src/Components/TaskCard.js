import React, { useState} from 'react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { VscSaveAs } from "react-icons/vsc";
import { FaEdit } from "react-icons/fa";
import { addDone, addTask, deleteTask } from '../utils/dataSlice';
import { useDispatch } from 'react-redux';
const TaskCard = (props) => {
    const [edit, setEdit] = useState(false);
    const [text, editText] = useState("");
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(props.name));
  };
  const handleDone = () => {
    dispatch(deleteTask(props.name));
    dispatch(addDone(props.name));
    };
    const handleChange = (e) => {
      editText(e.target.value);
    }
  const handleEdit = () => {
    if (edit === false) {
          editText(props.name);
          setEdit(true);
      }
      else
        {
            setEdit(false);
            dispatch(deleteTask(props.name));
            dispatch(addTask(text));
        }
    }
  return (
    <div className="flex flex-row items-center justify-between border border-black bg-white text-black my-1 min-h-[40px] ">
      <div className="p-1 w-auto overflow-visible">
        {edit ? (
          <input
            type="text"
            placeholder={props.name}
            onChange={handleChange}
            value={text}
            style={{ width: "calc(100vw - 120px)" }}
          />
        ) : (
          <h1 className="break-words">{props.name}</h1>
        )}
      </div>
      <div className="flex w-[120px] justify-end p-2">
        <button className="text-2xl p-1" onClick={handleDone}>
          <IoCheckmarkDoneCircle />
        </button>
        <button className="text-2xl p-1" onClick={handleDelete}>
          <MdDelete />
        </button>
        <button className="text-2xl p-1" onClick={handleEdit}>
          {edit ? <VscSaveAs /> : <FaEdit />}
        </button>
      </div>
    </div>
  );
}

export default TaskCard