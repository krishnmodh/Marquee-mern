debugger;
console.log("Global Execution Context starts");

var globalVariable = "I am a global variable";

console.log(globalVariable);
console.log(greet());
greet();
console.log("Global Execution Context ends");
function greet(){
    var name = 'Hastag'
    console.log("Inside global function");
}


// console.log("Global Execution Context starts");
// var globalVariable = "I am a global variable";
// console.log(globalVariable);
// console.log(globalFunction);
// globalFunction();
// console.log("Global Execution Context ends");
// var globalFunction = function(){
//     console.log("Inside global function");
// };


