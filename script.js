//Basic Operators

//Mathematical operators

// const now = 2037;
// const ageJohnas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJohnas, ageSarah);

// console.log(ageJohnas * 2, ageJohnas / 10, 2**3);

// const firstName = 'John';
// const lastName = 'A.b.u';
// console.log(firstName + ' ' + lastName);

// //Assignment Operators

// let x = 10 + 5; 
// x += 10//x = x + 10 = 25
// x *= 4;
// x ++
// x--;
// console.log(x);
// //comparison Operators
// console.log(ageSarah > ageJohnas)
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

//OPERATOR PRECENCE

// const now = 2037;
// const ageJohnas = now - 1991;
// const ageSarah = now - 2020;
// // console.log(ageJohnas, ageSarah);

// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 25 -10 -5;
// console.log(x, y);


// let markWeight =  '78';
// let markHeight = '1.69';
// let johnWeight = '92';
// let johnHeight = '1.95';

// const markAverage = markWeight/(markHeight * markHeight)

// console.log(markAverage);

// const johnAverage = johnWeight/(johnHeight * johnHeight)

// console.log(johnAverage);

// const markHigherBMI = markAverage > johnAverage

// if (markHigherBMI) {
//     console.log("Mark's BMI is higher than John's!");
// } else {
//     console.log("John's BMI is higher than Mark's!");
// }

// console.log(markHigherBMI);





// const firstName = 'Abubakr'
// const job = 'teacher';
// const birthYear = 1991;
// const year= 2037

// const abu = `I am ${firstName}, a ${year - birthYear} years ${job}!`
// console.log(abu);

// console.log('String with \n\ multiple');




//If or else statement

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`${yearsLeft} years left` );
// }

// const birthYear = 1991;
// let century;
// if(birthYear <= 2000) {
//      century = 20;
// }
// else{
//     century = 21;
// }

// console.log(century);



//Type conversion and coercion

//Type conversion 

const inputYear = 1991;
console.log(inputYear + 18);


console.log(String(23), 23);

//Type coercion

let n = '1' + 1;
n = n - 1;
console.log(n);


//Truthy and falsy value


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Abubakr'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all;");
}else{
    console.log('You should get a job');
}

let height;
if(height) {
    console.log('YAY! Height is defined');
}else{
    console.log('YAY! Height is undefined');
}

//Equality Operators


const age = 18;

if(age === 18) console.log('You just became');

if(age == 18) console.log('You just became');
