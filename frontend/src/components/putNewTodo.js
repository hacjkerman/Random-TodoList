async function putNewTodo(todoItem) {
  console.log(todoItem);
  const response = await fetch("http://localhost:8080/newTodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoItem),
  });
  return response.json();
}

export default putNewTodo;
