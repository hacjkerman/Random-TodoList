async function addNewTodo(username, password, todoItem) {
  const response = await fetch("http://localhost:8080/newTodo", {
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

export default addNewTodo;
