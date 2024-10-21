// A single object can have many different unrelated properties
const person = {
    first: "Yun",
    last: "Johnson",
    age: 23,
    phone: "999-999-9999"
    DOB: new Date("2-09-2001")
};

console.log(person.DOB)
console.log(person.phone)

const fruit = {
    "apple",
    "banana",
    "cherry",
};
console.log(fruit[1])