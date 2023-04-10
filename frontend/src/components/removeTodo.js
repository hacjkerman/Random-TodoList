async function removeTodo(username, password, todoItem) {
  const response = await fetch("http://localhost:8080/removeTodo", {
    method: "DELETE",
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

export default removeTodo;
