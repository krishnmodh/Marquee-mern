// function Dog(name,breed,age,weight){
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.weight = weight;

//     this.Eat = function () {
//         console.log("Chow chow");
//     };

//     this.Bark = function () {
//         console.log("bhow bhow!");
//     };
    

// }

// const dogthecharlie = new Dog("charlie", "german", 5, 35);

// console.log(dogthecharlie);

// dogthecharlie.Eat();
// dogthecharlie.Bark();

function Student(enrollmentId, name, email, phone, address, course) {
    
    this.enrollmentId = enrollmentId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.course = course;
    this.year = 1; 

    this.updateName = function (newName) {
        this.name = newName;
    };
    this.updateEmail = function (newEmail) {
        this.email = newEmail;
    };

    this.updatePhone = function (newPhone) {
        this.phone = newPhone;
    };
    this.updateAddress = function (newAddress) {
        this.address = newAddress;
    };
    this.updateCourse = function(newCourse){
        this.course = newCourse;
    };
    this.updateYear = function(newYear){
        this.year = newYear;
    };

}
    const student1 = new Student(2403051051077,"krishn","krishn@gmail.com",7984334713,"parul university","CSE");
    console.log(student1);

    student1.updateName("Krishn Modh");
    student1.updateEmail("modhkrishn@gmail.com");
    student1.updatePhone("1234567898");
    student1.updateAddress("baroda");
    student1.updateCourse("core cse");
    student1.updateYear(2);

    console.log(student1);