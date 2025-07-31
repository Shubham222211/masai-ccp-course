
function personInfo(){
    console.log(`${this.name} and ${this.age}`)
} 

person={
    name:"shubham",
    age:15
}



personInfo.call(person)