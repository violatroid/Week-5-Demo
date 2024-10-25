
// Array(ordered) of Objects(key:value pairs)
const data = [ // square bracket creates an array [] aka ordered list
    {name:"Dandy", kind: "Dog"} // {} create an object AKA key:value pairs
    {name:"Koshi", kind: "Dog"}
    {name:"Bianca", kind: "Cat"}
    {name:"Finley", kind: "cat"}
]; //end array

function petToString(pet){
    return`
    PET NAME: ${pet.name}
    KIND: Good ${pet.kind}
    `;
}

function printPet(pet) {
    console.log(petToString(pet) );
}
console.log(petToString(pet) );