
const person = {
    first: "Yun",
    last: "Johnson",
    age: 23,
    phone: "999-999-9999",
    DOB: new Date("2-09-2001")
};

const person2 = {
    first: "Nina",
    last: "Marie",
    age: 47,
    phone: "",
    DOB: new Date("")
};

function showMe(p){ 
    return `
    NAME: ${p.first}, ${p.last}
    PHONE NUMBER: ${p.phone}
    `;
}

console.log(showMe(person));
console.log(showMe(person2))
// console.log(showMe(first:Dany))