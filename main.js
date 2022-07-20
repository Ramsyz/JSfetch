fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.Stringfy({
    name: "new user"
  })
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
