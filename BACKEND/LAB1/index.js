import EventEmmiter from "node:events";
const myEmmiter =new EventEmmiter();
myEmmiter.on("Greet",(teacher)=>{
    console.log(`class started by ${teacher}`);
})
myEmmiter.on("exit",(teacher)=>{
    console.log(`class finished by ${teacher} `);
})
myEmmiter.emit("Greet",'chandrahas');
myEmmiter.emit("exit",'chandrahas');
