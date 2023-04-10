import LoginPage from "./components/Login/Login";
import TodoList from "./components/Todo";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState([]);
  const [currentTodoItem, setCurrentTodoItem] = useState({
    todo: "",
    time: "0",
  });
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      {isLoggedIn ? (
        <TodoList
          todos={todos}
          setTodos={setTodos}
          username={username}
          password={password}
          currentTodo={currentTodoItem}
          setCurrentTodo={setCurrentTodoItem}
        />
      ) : (
        <LoginPage
          setIsLoggedIn={setIsLoggedIn}
          setTodos={setTodos}
          setEmail={setEmail}
          email={email}
          setUsername={setUsername}
          username={username}
          setPassword={setPassword}
          password={password}
        />
      )}
    </div>
  );
}

export default App;
