async function putCurrentTodo(todoItem) {
  console.log(todoItem);
  const response = await fetch("http://localhost:8080/newCurrentTodo", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoItem),
  });
  return response.json();
}

export default putCurrentTodo;
