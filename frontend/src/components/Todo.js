import React, { useState } from "react";
import Timer from "./Timer";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [currentTodoItem, setCurrentTodoItem] = useState({
    todo: "",
    time: "0",
  });

  console.log("awfopwlfpoawek - " + currentTodoItem.time);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTimeValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "" && timeValue.trim() !== "") {
      setTodos([...todos, { todo: inputValue.trim(), time: timeValue.trim() }]);
      setInputValue("");
      setTimeValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const handleStartTodo = (index) => {
    let currTodo = todos[index];
    currTodo.time = currTodo.time * 60;
    console.log(currTodo);
    setCurrentTodoItem(currTodo);
    handleDeleteTodo(index);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <Timer todo={currentTodoItem} />
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="todo-input">
          New Task
        </label>
        <div className="flex">
          <input
            className="border border-gray-300 rounded-lg py-2 px-3 mr-2 flex-1"
            id="todo-input"
            type="text"
            placeholder="Enter a task"
            value={inputValue}
            onChange={handleInputChange}
          />
          <input
            className="border border-gray-300 rounded-lg py-2 px-3 flex-1"
            type="text"
            placeholder="Estimated time (in minutes)"
            value={timeValue}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTodo}
      >
        Add Task
      </button>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li
            className="flex items-center justify-between bg-gray-100 py-2 px-4 rounded-lg mb-2"
            key={index}
          >
            <div>{todo.todo}</div>
            <div className="text-gray-500">{todo.time} min</div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => {
                handleStartTodo(index);
              }}
            >
              Start
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
