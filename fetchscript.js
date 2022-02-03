`use strict`

import * as DOM from './fetchDOM.js';

DOM.button.onclick = () => read(DOM.input.value);
DOM.buttonPost.onclick = () => create(DOM.input.value);

let read = URL => {
  axios.get(URL)
    .then((response) => {
      DOM.output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
      console.log(err);
    })
}

let create = URL => {
  axios.post(URL, {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  })
    .then((response) => {
      DOM.output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
      console.log(err);
    })
}

//EXERCISES
//1. https://reqres.in/api/users?page=2
//2. https://reqres.in/api/users/2

//3. https://reqres.in/api/users
// let create = URL => {
//   axios.post(URL, {
//     name: `Morpheus`,
//     job: `Leader`
//   })
//     .then((response) => {
//       DOM.output.innerHTML = JSON.stringify(response.data);
//     }).catch((err) => {
//       console.log(err);
//     })
// }

//4. https://reqres.in/api/register
//{"id":4,"token":"QpwL5tke4Pnpja7X4"}

// let create = URL => {
//   axios.post(URL, {
//     email: "eve.holt@reqres.inheus",
//     password: "pistol"
//   })
//     .then((response) => {
//       DOM.output.innerHTML = JSON.stringify(response.data);
//     }).catch((err) => {
//       console.log(err);
//     })
// }

//5.https://reqres.in/api/login
//{"token":"QpwL5tke4Pnpja7X4"}

// let create = URL => {
//   axios.post(URL, {
//     email: "eve.holt@reqres.in",
//     password: "cityslicka"
//   })
//     .then((response) => {
//       DOM.output.innerHTML = JSON.stringify(response.data);
//     }).catch((err) => {
//       console.log(err);
//     })
// }