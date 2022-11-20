// Função login base

// function SendLogin({ email, password}) {

//     const UserLogin = {
//         email: email,
//         password: password
//     }

//     const promise = axios.post(`http://localhost:5000/database`, UserLogin)
    
//     promise.catch(error => {
//         alert("Login não foi efetuado corretamente. Mais informações estão disponíveis no console")
//         console.log(error)
//     })

//     return promise.then((response) => {
//         localStorage.setItem("User_Info", JSON.stringify(response.data))
//         if (condição){
//             navigate("/home")
//         } else {
//             console.log(response)
//         }
//     });
// }

// export {SendLogin};