// let arrayOfcars = ['RR', 'MG', 'fortuner', 'Hyndai'];
// const [first, second, ... third] = [ ... arrayOfcars];
// console.log(first);
// console. log(second);
// console.log(third);

// let arrayOfcars = [
// 'G-wagon',
// [90, true, false],
// 'fortuner',
// 'MG',
// 'buggati',
// ];
// const [first, second, ... third] = [ ... arrayOfcars.flat(1)];
// console.log(first);
// console.log(second);
// console.log(third);

// const user = {
//   name: "John",
//   age: 30,
//   email: "user@gmail.com",
//   phone: "787878787",
// };

// const { age, phone } = { ...user };

// console.log(age);
// console.log(phone);


function createArray(){
    const items = [];
    return {
        push(value) {
            items.push(value);
        },
        getElements(index){
            if(index > items.length){
                return "Not Found";
            }
            return items[index];
        },
        getarray(){
            return items;
        }
    };
}
const arr = createArray();
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);

console.log(arr.getElements(1));
console.log(arr.getElements(5));
console.log(arr.getElements(3));