// Add your code here
function submitData(name, email){
  const userinfo = {
    name,
    email,
  }
 return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userinfo),
  })
  .then(resp => resp.json())
  .then((data) => document.body.innerHTML = data.id)
  .catch(error => document.body.innerHTML = error.message)
}


  // fetch('http://localhost:3000/users', {
  // method: "POST",
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  // },
  // body: JSON.stringify({
  //   userName: "Name",
  //   userEmail: "Email",
  // })
  // return fetch()