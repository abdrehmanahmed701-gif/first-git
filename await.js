    async  function fetchData(url) {
        const response = await fetch(url)
        const data=await response.json()   
        return data
    }
   fetchData("https://jsonplaceholder.typicode.com/users")
   .then(data => {
    let uWCIK=data.filter((u)=>u.company.name.includes("k"))
   console.log(uWCIK);
   })

 const p1=new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("macro task 1");
   }, 1000)
    resolve("macro task")
   })
         p1.then(m=>console.log(m))
   const p2=new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("macro task 2");
   }, 1000)
    resolve("macro task")
   })
         p2.then(m=>console.log(m))
   const promise=new Promise((resolve, reject) => {
    resolve("macro task")
   })
   promise.then(message=> console.log(message))