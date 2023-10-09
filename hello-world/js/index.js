let myName = 'Alice'; // Sträng
let age = 34; // Nummer
const isTeacher = true; // Boolean

console.log(myName + ' ' + age + ' ' + isTeacher);
console.log('Ålder: ' + age);
console.log('Är lärare: ' + isTeacher);

console.log(age + 10);

if (myName === 'Christoffer') {
    console.log('Hej Christoffer!');
} else {
    console.log('Du är inte Christoffer');
}

if (age > 34) {
    console.log('Ung i hjärtat!');
} else if (age > 30 && age < 35 ) {
    console.log('Precis rätt!');
}