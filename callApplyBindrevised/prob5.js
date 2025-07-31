 const user={
    username:'shubham',

    showusername:function(){
        console.log(this.username)
    }
}


function showusernameOut(){
    console.log(`${this.username}`)
}


let ans2=showusernameOut.bind(user)
ans2()