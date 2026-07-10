// const students = [
//   {
//     name: "Aarav Sharma",
//     email: "aarav.sharma@example.com",
//     phone: "9876543210",
//     course: "BCA",
//     examScore: [
//       { subject: "Java", marks: 80 },
//       { subject: "HTML", marks: 75 },
//       { subject: "JavaScript", marks: 90 }
//     ]
//   },
//   {
//     name: "Rahul Verma",
//     email: "rahul.verma@example.com",
//     phone: "9876543212",
//     course: "B.Tech",
//     examScore: [
//       { subject: "Java", marks: 92 },
//       { subject: "HTML", marks: 87 },
//       { subject: "JavaScript", marks: 95 }
//     ]
//   },
//   {
//     name: "Priya Patel",
//     email: "priya.patel@example.com",
//     phone: "9876543213",
//     course: "BCA",
//     examScore: [
//       { subject: "Java", marks: 70 },
//       { subject: "HTML", marks: 85 },
//       { subject: "JavaScript", marks: 80 }
//     ]
//   }
// ];

// let arrayOfMarks = students.map((student) =>
//   student.examScore.reduce((acc, curr) => acc + curr.marks, 0)
// );

// console.log("Total Marks:", arrayOfMarks);

// let sortedArray = [...arrayOfMarks].sort((a, b) => b - a);

// console.log("Sorted Marks:", sortedArray);

// console.log("Highest Marks:", sortedArray[0]);

const students = [
  {
    name: "krishn",
    email: "krishn@example.com",
    course: "BCA",
    phone: "9876543210"
  },
  {
    name: "ram",
    email: "ram@example.com",
    course: "B.Tech",
    phone: "9876543212"
  },
  {
    name: "Priya Patel",
    email: "priyaa@example.com",
    course: "BCA",
    phone: "91xxxxxxx3"
  },
  {
    name: "ramu",
    email: "ramu@example.com",
    course: "MCA",
    phone: "98xxxxxxx0"
  }
];

function getStudentsByCourse(courseName) {
  return students.filter((student) => student.course === courseName);
}

console.log(getStudentsByCourse("BCA"));