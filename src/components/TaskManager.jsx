import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const filteredTasks = tasks.filter(task => 
    filter === "All" ? true : filter === "Active" ? !task.completed : task.completed
  );

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-xl mx-auto mt-10 transition-colors duration-300">

      {/* Input & Add Button */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a task..."
          className="w-[30%] min-w-[150px] px-4 py-2 rounded-2xl border border-gray-300 dark:border-gray-600
                     focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-100
                     shadow-sm transition-all duration-200 mr-4"
        />
        <Button variant="primary" onClick={addTask}>Add</Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["All", "Active", "Completed"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-2xl font-medium border ${
              filter === f 
                ? "bg-blue-500 text-white border-blue-500 shadow-md" 
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            } transition-all duration-200`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-3">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-sm
                       transition-all duration-200 hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <span className={`${task.completed ? "line-through text-gray-400 dark:text-gray-300" : "text-gray-900 dark:text-gray-100"} text-lg`}>
              {task.text}
            </span>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => toggleComplete(task.id)}>✔</Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>✖</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
