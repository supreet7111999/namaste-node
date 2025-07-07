require("./xyz");
const sum=require("./sum")
var name="Namaste NodeJS";

console.log(name);
var a=10;
var b=20;

console.log(a+b);

console.log(global) //browser window
// it give access to setTimeout

console.log(this) // this is empty obj 


//global ===globalThis // both are pointing to windows