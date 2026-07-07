// function greet(name){
//     console.log("hello "+ name);
// }
// function execute(fn,name){
//     fn(name);
// }
// execute(greet,"krishn");

// function greet(){
//     return function(){
//         console.log('Good morning ....!0');
//     };
// }
// let greetMsg = greet();
// greetMsg();

(function (val1,val2){
    console.log(`'hellogreet' ${val1+val2}`);
})(12,12);