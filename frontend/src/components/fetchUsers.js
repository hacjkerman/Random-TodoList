async function fetchUsers() {
  const response = await fetch("http://localhost:8080/allUsers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export default fetchUsers;
