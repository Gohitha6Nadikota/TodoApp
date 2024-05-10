import './App.css';
import TaskComponent from './Components/TaskComponent';
import DoneComponent from './Components/DoneComponent';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './utils/dataSlice';
function App() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTaskText(e.target.value);
  }
  const handleAdd = () => {
    if (taskText !== "") {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  }
  return (
    <div className="">
      <div className='bg-black text-white flex justify-center h-[8vh] items-center font-semibold'>ToDo Application</div>
        <div className="flex justify-center mt-[50px] md:m-[50px]">
          <input
            className="border border-black p-1 m-1 w-[70%]"
            type="text"
            value={taskText}
            onChange={handleChange}
            placeholder="Enter the task"
          />
          <button className="bg-black text-white mx:1 md:mx-2 rounded-xl p-1 md:p-3"
          onClick={handleAdd}>
            Add Task
          </button>
        </div>
      <TaskComponent />
      <DoneComponent/>
      </div>
  );
}

export default App;
