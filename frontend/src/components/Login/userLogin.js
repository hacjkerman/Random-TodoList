async function userLogin(userName, userPass) {
  const response = await fetch("http://localhost:8080/userLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName,
      userPass: userPass,
    }),
  });
  return await response.json();
}

export default userLogin;
