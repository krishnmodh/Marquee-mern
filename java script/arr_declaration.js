// const students = [
//   {
//     name: 'Aarav Sharma',
//     email: 'aarav.sharma@example.com',
//     year: 1,
//     course: 'BCA',
//     phone: 'iphone',
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 82 },
//       { subject: 'HTML', marks: 91 },
//       { subject: 'JavaScript', marks: 88 },
//     ],
//   },
//   {
//     name: 'Priya Patel',
//     email: 'priya.patel@example.com',
//     year: 2,
//     course: 'BSc IT',
//     phone: 'samsung',
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 75 },
//       { subject: 'HTML', marks: 89 },
//       { subject: 'JavaScript', marks: 84 },
//     ],
//   },
//   {
//     name: 'Rahul Verma',
//     email: 'rahul.verma@example.com',
//     year: 3,
//     course: 'B.Tech',
//     phone: 'vivo',
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 92 },
//       { subject: 'HTML', marks: 87 },
//       { subject: 'JavaScript', marks: 95 },
//     ],
//   },
//   {
//     name: 'Sneha Joshi',
//     email: 'sneha.joshi@example.com',
//     year: 4,
//     course: 'B.E.',
//     phone: 'oppo',
//     isGraduated: true,
//     examScore: [
//       { subject: 'Java', marks: 85 },
//       { subject: 'HTML', marks: 93 },
//       { subject: 'JavaScript', marks: 90 },
//     ],
//   },
//   {
//     name: 'Karan Mehta',
//     email: 'karan.mehta@example.com',
//     year: 3,
//     course: 'B.Com',
//     phone: 'nothing',
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 70 },
//       { subject: 'HTML', marks: 78 },
//       { subject: 'JavaScript', marks: 81 },
//     ],
//   },
//   {
//     name: 'Ananya Singh',
//     email: 'ananya.singh@example.com',
//     year: 4,
//     course: 'BBA',
//     phone: 'poko',
//     isGraduated: true,
//     examScore: [
//       { subject: 'Java', marks: 95 },
//       { subject: 'HTML', marks: 96 },
//       { subject: 'JavaScript', marks: 94 },
//     ],
//   },
//   {
//     name: 'Rohan Desai',
//     email: 'rohan.desai@example.com',
//     year: 2,
//     course: 'BCA',
//     phone: 'oneplus',
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 68 },
//       { subject: 'HTML', marks: 74 },
//       { subject: 'JavaScript', marks: 80 },
//     ],
//   },
//   {
//     name: 'Meera Nair',
//     email: 'meera.nair@example.com',
//     year: 1,
//     course: 'BSc CS',
//     phone: 'nokia',
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 88 },
//       { subject: 'HTML', marks: 85 },
//       { subject: 'JavaScript', marks: 90 },
//     ],
//   },
//   {
//     name: 'Vikram Rao',
//     email: 'vikram.rao@example.com',
//     year: 4,
//     course: 'MBA',
//     phone: 'redmi',
//     isGraduated: true,
//     examScore: [
//       { subject: 'Java', marks: 79 },
//       { subject: 'HTML', marks: 82 },
//       { subject: 'JavaScript', marks: 77 },
//     ],
//   },
//   {
//     name: 'Neha Kapoor',
//     email: 'neha.kapoor@example.com',
//     year: 2,
//     course: 'B.Tech',
//     phone: 'blueberry',
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 91 },
//       { subject: 'HTML', marks: 88 },
//       { subject: 'JavaScript', marks: 93 },
//     ],
//   },
// ];

// function BasicStudentDetails(students) {
//   return students.map(function (student) {
//     return {
//       name: student.name,
//       email: student.email,
//       phone: student.phone
//     };
//   });
// }

// const basicDetails = BasicStudentDetails(students);

// console.log(basicDetails);

const marks = [95,78,90,78,59];
// let totalmarks = 0;
// function totalmarks(marks){
//     marks.forEach(element => {
//         totalmarks += element;
//     });
// }
// const total marks = marks.
    const total = marks.reduce(function (sum, mark) {
    return sum + mark;
    }, 0);

    const percentage = (total/(marks.length * 100))*100;
    console.log(marks);
    console.log(percentage)