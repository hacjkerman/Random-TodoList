async function postTodos(todoArray, todoItem) {
  console.log(todoArray);
  const response = await fetch("http://localhost:8080/store", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoArray, todoItem),
  });
  return response.json();
}

export default postTodos;
