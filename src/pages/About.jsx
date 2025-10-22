import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300">
      
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-gray-800 dark:text-gray-100">
        About This Task Manager App
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        This is a Task Manager application built using React and styled with Tailwind CSS. 
        It allows users to easily manage their daily tasks in a clean and interactive interface.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
        Core Functionality:
      </h2>

      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
        <li>Add new tasks with a simple input field</li>
        <li>Mark tasks as completed or active with a toggle</li>
        <li>Delete tasks that are no longer needed</li>
        <li>Filter tasks by status: All, Active, Completed</li>
        <li>Tasks are stored in local storage for persistence</li>
        <li>Responsive design compatible with mobile and desktop</li>
        <li>Supports light/dark mode for user preference</li>
      </ul>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        This application demonstrates the use of React state management, hooks, and Tailwind CSS styling 
        to create a practical and user-friendly productivity tool. It's perfect for managing tasks efficiently 
        and learning modern front-end development techniques.
      </p>
    </section>
  );
}
