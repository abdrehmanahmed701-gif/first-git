for (let i = 25; i>=10 ; i--){
    console.log(i)
}
console.log("after loop")

function fn (hours){
    let zero = []
    for (let i = hours.length-1; i>=0 ; i--){
        if (hours[i]===0)
            zero.push(hours[i])
        }
        return zero

}
console.log(fn ([0,1,3,4,1,0]))
let sum = 0
 for (let i = 1 ; i<=5; i++){
    if(i%2==0)
{sum = sum+i}
 }
console.log(sum)
for (let i = 1; i<=5;i++)
console.log(`${i}*${i}=${i*i}`)


function mark (marks){
    let i=0 
    let m=[]
    while(i<=marks.length-1){
        if(marks[i]>=0 && marks[i]<=100)
        m.push(marks[i])
    i++
    }
    return m
}
console.log( mark([-10,100,101,99,80,60]))
//restaurant
function createRestaurant(name,location,rate=0,menu=[]){
    if(!name|| name==""||!location)
        return false
    return {
        id:1,name,location,rate,menu
    }
}
const mizan=createRestaurant("cloud sun","bethel")
function addMenu(restaurant,name,price,category){
    const id=restaurant.menu.length+1
    const menu={id,name,price,category}
    restaurant.menu.push(menu)
    return restaurant
}
const mizanMenu=addMenu(mizan,"coffee",50,"drink")
console.log(mizan)

function createOrder(restaurant,menuId,quantity){
    if(quantity<=0){
        return "quantity must be greater than zero"
    }
    const ordersId=1
    const menus=restaurant.menu
    const menu=menus.find((m)=>m.id==menuId)
    if(!menu){
        return "menu is not found"
    }
    const totalPrice=menu.price*quantity
    const menuWithQuanyity={...menu, quantity: quantity}
    console.log({ordersId,quantity,totalPrice,items:[]});
}
createOrder(mizan,1,0)
const dog = {
    name:"Rex",
    bark:function () {
        return "Woof!";
    }
}
console.log(dog.bark());
let user={id:1,name:"a",email:"a@gmail.com",password:"a123",
    login:(email,password)=>{
        if (email !==user.email|| password !==user.password)
            return "invalid login"
    return"login success"
    }
}

console.log(user.login("b@gmail.com","a123"));
const person={id:1,name:"a","phone":"0987654321"}
const personEntries=Object.entries(person)
console.log(personEntries);
const value=Object.values(person)
console.log(value);
function product(name,price,brand){
    this.id=1
    this.name=name
    this.price=price
    this.brand=brand
}
const p1=new product("p1",1000,"nike")
const p2=new product("p2",100,"addidas")
console.log(p1,p2);
class Car{
    constructor(c,s,b){
        this.color=c
        this.speed=s
        this.brand=b
        this.model="2026"
    }
    start(){
        console.log("this");
        
    }
}
const car1=new Car("silver","100mph","BMW")
const car2=new Car("gold","120mph","BYD")
car1.start()
console.log(car1,car2);

class user