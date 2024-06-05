import React, { useState } from "react";
import Addtodoform from "../components/Addtododform";
import Input from "../components/Input";

const Todolist = () => {
  const [tasks, setTasks] = useState([
    { id: 1, remarks: "Belajar mandiri HTML", completed: false },
    { id: 2, remarks: "Praktek HTML", completed: false },
    { id: 3, remarks: "Belajar yang serius tentang React", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: tasks.length + 1,
        remarks: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mx-auto mt-5 mb-4">
      <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">To-Do List</h2>
          <Addtodoform
            onChange={setNewTask}
            addTask={addTask}
            newTask={newTask}
          />
          <ul className=" pl-5">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`mb-2  ${task.completed ? "line-through" : ""}`}
              >
                <div className="flex items-center">
                  <Input
                    type="checkbox"
                    className="checkbox mr-2"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  {task.remarks}

                  <button
                    className="btn btn-sm btn-ghost ml-auto"
                    onClick={() => deleteTask(task.id)} // Menetapkan id tugas yang akan dihapus
                  >
                    Del
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
