//  // we can call this function before declaration

// function calcAge1(birthYear){
//     // const age=2037-birthYear;
//     // return age;
//     return 2037-birthYear;
// }
// const age1= calcAge1(1991);
// console.log (age1)

// //can not this function before declaration as we have assigned a const var to it
// const calcAge2=function(birthYear){
//     return 2037-birthYear;
// }

// const age2=calcAge2(1991);

// console.log(age1,age2);

// //arrow function
// const calcAge3 = birthYear => 2037-birthYear;
// const age3=calcAge3(1991);
// console.log(age3);

// const calcAge = function calcAge1(birthYear) {
//     // const age=2037-birthYear;
//     // return age;
//     return 2037 - birthYear;
// }
// const yearsIntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {

//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {

//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

//     //return `${firstName} retires in ${retirement} years` ; 
// }

// console.log(yearsIntilRetirement(1991, 'Nazeem'));
// console.log(yearsIntilRetirement(1950, 'Saniya'));



// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


// //assignment
// const calcAverage = (a, b, c) => a + b + c / 3

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(85, 54, 41);
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team wins");
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576,111);

// //test2
// scoreDolphins=calcAverage(85,54,41);
// scoreKoalas=calcAverage(23,34,27);
// console.log(scoreDolphins,scoreKoalas);
// checkWinner(scoreDolphins,scoreKoalas);

//Array
// const calcAge=function(birthYear){
//     return 2037-birthYear;
// }
// const years=[1990,1967,2002,2010,2018];

// const age1=calcAge(years[0]);
// const age2=calcAge(years[1]);
// const age3=calcAge(years[years.length-1]);
// console.log(age1,age2,age3);

// const friends=['Saniya','Tasmiya','Aliya'];
// const newLength=friends.push('Juvi');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Saniya');
// console.log(friends);

// //remove elements
// const popped=friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift('Saniya');
// console.log(friends);

// console.log(friends.indexOf('Saniya'));
// console.log(friends.indexOf('Kausain'));

// console.log(friends.includes('Saniya'));
// console.log(friends.includes('Kausain'));

// friends.push(23);
// console.log(friends.includes('23'));

// if(friends.includes('Saniya')){
//     console.log('You have friend called Saniya');
// }

// const calcTip=function(bill){
//     return bill>=50 && bill<=300 ? bill*0.15: bill*0.2;

// }

// const bills=[125,555,44];
// const tips=[calcTip(bills[0]) , calcTip(bills[1]),calcTip(bills[2])];
// const totals=[bills[0]+tips[0] , bills[1]+tips[1] , bills[2]+tips[2]];

// console.log(bills,tips,totals);


// const saniya={
//     firstName:'Saniya',
//     lastName:'Mulla',
//     age:2037-1995,
//     birthYear:1995,
//     job:'student',
//     friends:['Tasmiya','Saniya','Aliya'],
//     hasDriversLicense:true,
//     // calcAge:function(birthYear){
//     //     return 2037-birthYear;
//     // }
//     calcAge:function(){
//         // console.log(this);
//         return 2037-this.birthYear;
//     }
// ,
//     getSummary: function(){
//         return `${this.firstName} is ${this.calcAge()} -year old ${saniya.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`

//     }
// };
// console.log(saniya);

// console.log(saniya.lastName);

// console.log(saniya['lastName']);

// const nameKey='Name';
// console.log(saniya['first'+nameKey]);
// console.log(saniya['last'+nameKey]);

// const interestedIn= prompt('what do you want to know about saniya? Choose between firstName,lastName,age,job, and friends' );
// console.log(saniya[interestedIn]);

// saniya.location='Pune';
// saniya['mobile'] ='9073416137';
// console.log(saniya);
// console.log(`${saniya.firstName} has ${saniya.friends.length} friends, and her best friend is called ${saniya.friends[0]}`);

// console.log(saniya.calcAge(1995));
// console.log(saniya.calcAge());
// console.log(saniya.getSummary());
// console.log(saniya['calcAge'](1995));


//assignment
// const mark={
//     fullName:'Mark Miller',
//     mass:78,
//     height:1.69,
//     calcBMI:function(){
//         this.bmi=this.mass/this.height ** 2;
//         return this.bmi;
//     }

// };

// const john={
//     fullName:'John Miller',
//     mass:89,
//     height:1.75,
//     calcBMI:function(){
//      this.bmi=this.mass/this.height ** 2;
//         return this.bmi;
//     }

// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if(mark.bmi>john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi})
//     is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }else if(john.bmi>mark.bmi){
//     console.log(`${john.fullName}'s BMI (${john.bmi})
//     is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }





const saniya = [
    'Saniya',
    'Mulla',
    2037 - 1995,
    1995,
    'student',
    ['Tasmiya', 'Saniya', 'Aliya'],
    true

];
console.log(saniya[0]);

const types = [];

for (let i = 0; i < saniya.length; i++) {

    console.log(saniya[i], typeof saniya[i]);

    // types[i] = typeof saniya[i];
    types.push(typeof saniya[i]);

}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

console.log("---only strings---");
for (let i = 0; i < saniya.length; i++) {
    if (typeof saniya[i] !== 'string') continue;
    console.log(saniya[i], typeof saniya[i]);
}

console.log("---break with number---");
for (let i = 0; i < saniya.length; i++) {
    if (typeof saniya[i] === 'number') break;
    console.log(saniya[i], typeof saniya[i]);
}