function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
        }
    };
}

let krishn = createPerson("krishn", 19);
let abc = createPerson("abc", 16);

krishn.greet();
abc.greet();