async function addCurrentTodo(username, password, todoItem) {
  const response = await fetch("http://localhost:8080/newCurrentTodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: username,
      userPass: password,
      todo: todoItem,
    }),
  });
  return response.json();
}

export default addCurrentTodo;
