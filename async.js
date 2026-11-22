    console.log("middle")
    console.log("last")
setTimeout(()=>{
    console.log("first")
},3000)
// setInterval(()=>{console.log("hi")},3000)

    function login(email,password) {
        setTimeout(() => {
           console.log("success");
        }, 4000);
    }
    login("abd")
    let users=[
        {email:"u1@gmail.com",password:"u123"},
        {email:"u2@gmail.com",password:"u234"},
        {email:"u3@gmail.com",password:"u345"}
    ]
    function findUserByEmail(email) {
            let user=null
            setTimeout(() => {
                 user=users.find((u)=>u.email==email)
            }, 3000);
            return user
        }
        let response=findUserByEmail("u1@gmail.com")
        console.log(response);
        let p3=new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("user found")
            }, 3000);
        })
        p3.then((message)=>console.log(message))
        .catch((error)=>console.error())
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(resp => resp.json() )
        .then(data => console.log(data) )
       let p1=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success")
        }, 3000);
       })
            let p2=new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error")
        }, 3000);
       })
       const resp=Promise.allSettled([p1,p2])
       .then((data)=>console.log(data))
       .catch((err)=>console.log(err))
       
