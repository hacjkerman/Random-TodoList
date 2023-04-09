import LoginPage from "./components/Login/Login";
import TodoList from "./components/Todo";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? <TodoList /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
