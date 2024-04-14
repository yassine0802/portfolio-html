console.log("hello");
//data types
//for loop
//if statement
//functions
//Variable
let num = 5;
console.log(num);
num = 8;
console.log(num);

const nameF = "hi";
console.log(nameF);
//nameF = "hello";

//primtive data :
//number
let x = 5;
//string
let firstName = "ibs";
//boolean
let y = false;
console.log(y);
console.log(9 > 19);
console.log(9 < 19);
// non primitive data :
//arrays
const students = ["yessine", "raslen", "omar", "hayfa"];

console.log(students[1]);

const person = {
  firstName: "joe",
  lastName: "doe",
  tel: 2658888,
};
console.log(person.tel);
const studentsInfo = [
  {
    name: "jane",
    tel: 50259484848,
  },
  {
    name: "john",
    tel: 6848494984984,
  },
];
console.log(studentsInfo[0].name + "'s phone number is " + studentsInfo[0].tel);
console.log(studentsInfo[1].name + "'s phone number is " + studentsInfo[1].tel);
for (let i = 0; i < studentsInfo.length; i++) {
  console.log(
    studentsInfo[i].name + "'s phone number is " + studentsInfo[i].tel
  );
}
const age = prompt("type your age");
//console.log(age);
if (age > 18) {
  console.log("adult");
}
const agess = prompt("type your age");
//console.log(age);
if (age > 18) {
  console.log("adult");
} else if (age == 18) {
  console.log("barely adult");
} else {
  console.log("minor");
}
const ages = [18, 5, 39, 50, 1000, 0];s

for (let j = 0; j < ages.length; j++) {
    if (ages[j] > 18) {
        console.log(ages[j] + " adult");
      } else if (ages[j] == 18) {
        console.log(ages[j] + " barely adult");
      } else {
        console.log(ages[j] + " minor");
      }
  }