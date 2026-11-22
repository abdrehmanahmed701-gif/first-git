const users = []
const messages = []
class User {
    constructor(name, phone) {
        this.id = users.length + 1
        this.name = name.trim()
        this.phone = phone
        this.userName = ""
        this.bio = ''
        this.status = "acttive"
        this.role = "user"
    }
updateUserName(un){
    let isTaken = users.some((u) => u.userName == un)
    if(isTaken)
        return "username already exist"
    this.userName = un
    return "sucess"
}}
class Admin extends User {
    constructor(name, phone) {
        super(name,phone)
        this.role = 'admin'
        
    }
}

const u1 = new User("   u1         ", "0912")
users.push(u1)
const u2 = new User("u2", "0911")
users.push(u2)
const u3 = new User("u1", "0913")
users.push(u3)
const admin1 = new User("Admin", "0914")
users.push(admin1)

console.log(users)


class Message {
    constructor(message, senderId, receiverId, date, isRead) {
        this.id = messages.length + 1
        this.message = message
        this.senderId = senderId
        this.receiverId = receiverId
        this.date = date
        this.isRead = isRead
    }
    sendMessage(message) {
        messages.push(message)
    }
    viewMessage(userAId, userBId) {
        let conversations = messages.filter((m, i) => {
            // update is read status of message
            if (m.senderId == userBId && m.receiverId == userAId && !m.isRead)
                messages[i].isRead = true
            return (m.senderId == userAId && m.receiverId == userBId) ||
                (m.senderId == userBId && m.receiverId == userAId)
        }
        )
        return conversations
    }
}
const m1 = new Message("Hi", 1, 2, new Date(), false)
m1.sendMessage(m1)
const m2 = new Message("Hello", 2, 1, new Date(), false)
m2.sendMessage(m2)

console.log(m2.viewMessage(1, 2))
const m3 = new Message("Hi", 2, 3, new Date(), false)
m3.sendMessage(m3)
console.log(messages)






function manageStudent() {
    let students = []
    return {
        addStudent: function (name, email) {
            students.push(
                {
                    id: students.length + 1,
                    name, email
                })
            return students
        },
        removeStudent: function (id) {
            const index = students.findIndex(s => s.id == id)
            if (index == -1)
                return "student not found"
            students.splice(index, 1)
            return students
        }
    }
}
const response = manageStudent()
console.log(response.removeStudent(1))
let students = response.addStudent("a", "a@gmail.com")
// console.log(students)
class A{
    b(name){
        console.log(`hello mr.${name} from parent class`)
    }
}
class B extends A{
    b(name){
        console.log(`hello mr.${name} from child class`)
    }
}
const obl = new B()
obl.b("x")