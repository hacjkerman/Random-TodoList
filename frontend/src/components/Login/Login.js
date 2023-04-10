import { useState } from "react";
import createNewUser from "./createNewUser";
import userLogin from "./userLogin";

function LoginPage(props) {
  const setEmail = props.setEmail;
  const setUsername = props.setUsername;
  const setPassword = props.setPassword;
  const email = props.email;
  const username = props.username;
  const password = props.password;
  const [error, setError] = useState("");
  const [pageType, setPageType] = useState("Login");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pageType === "Register") {
      if (username !== "" && password !== "") {
        createNewUser(username, password);
        alert("Registration successful!");
      } else {
        setError("Invalid username or password");
      }
    } else if (pageType === "Login") {
      const loginResult = await userLogin(username, password);
      if (loginResult !== null) {
        props.setIsLoggedIn(true);
        props.setTodos(loginResult.todo);
      } else {
        alert("Login unsuccessful");
      }
    }
  };

  const handleRegister = (e) => {
    setPageType("Register");
    e.preventDefault();
  };

  const handleSignIn = (e) => {
    setPageType("Login");
    e.preventDefault();
  };
  return (
    <>
      <div>
        {pageType === "Login" ? (
          <div className="flex align-middle justify-center flex-col w-screen bg-white rounded">
            <h1 className="text-4xl font-bold mb-8 text-center mt-4">
              {pageType}
            </h1>
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex align-middle justify-center flex-col w-screen bg-white rounded">
            <h1 className="text-4xl font-bold mb-8 text-center mt-4">
              {pageType}
            </h1>
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default LoginPage;
