//Lecture 1

// let js = 'amazing';
// console.log(40 + 6 + 23 - 10);

// let firstName = "Ng";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// firstName = "Lee";
// console.log(firstName);

// //asm 1
// let country = "Malaysia";
// let continent = "Asia";
// let population = 32.7;

// console.log(country);
// console.log(continent);
// console.log(population);

//Lecture 2
// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof '23');

// javascriptIsFun = "false";
// console.log(typeof javascriptIsFun);

//asm 2
// const country = "Malaysia";
// const isIsland = false;
// const continent = "Asia";
// let population = 32.7;
// let language;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// let year;
// console.log(year);
// console.log(typeof year);

// year = null;
// console.log(year);
// console.log(typeof year);

//asm 3
// const country = "Malaysia";
// const continent = "Asia";
// let population = 32.7;
// const language = 'Mandarin';
// language = "English";

// console.log(country);
// console.log(continent);
// console.log(population);

// let age = 22;
// age = 23;

// const birthYear = 2002;

// var job = "consultant";
// job = "fucker";

// const now  = 2022;
// const ageWJ = 2022 - 2000;
// const ageMS = 2022 - 2005;
// console.log(ageWJ, ageMS);
// console.log(ageMS * 2 + 2 ** 3 + 2);

// const firstName = "Ng";
// const lastName = "Wei Jian";
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// console.log(x);

// console.log(ageWJ < ageMS);
// console.log(18 <= ageMS);

// const now = 2022;
// const ageWJ = 2022 - 2000;
// const ageMS = 2022 - 2005;

// console.log(now - 2000 > now - 2005);

// let x, y;
// x = y = 23 - 10 - 4;
// console.log(x, y);

// const averageAge = (ageWJ + ageMS) / 2;
// console.log(averageAge);

//asm4

// const country = "Malaysia";
// const isIsland = false;
// const continent = "Asia";
// let population = 32.7;
// let language;
// let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

// console.log(country);
// console.log(continent);
// console.log(population / 2);
// console.log(population + 1);
// console.log(population > 6);
// console.log(population < 33);
// console.log(isIsland);
// console.log(language);

// coding challenge 1
// const markWeightQ1 = 78;
// const markHeightQ1 = 1.69;
// const johnWeightQ1 = 92;
// const johnHeightQ1 = 1.95;
// const markWeightQ2 = 95;
// const markHeightQ2 = 1.88;
// const johnWeightQ2 = 85;
// const johnHeightQ2 = 1.76;
// const markBMI1 = markWeightQ1 / (markHeightQ1 ** 2);
// const markBMI2 = markWeightQ2 / (markHeightQ2 ** 2);
// const johnBMI1 = johnWeightQ1 / (johnHeightQ1 ** 2);
// const johnBMI2 = johnWeightQ2 / (johnHeightQ2 ** 2);
// const compareBMI1 = markBMI1 > johnBMI1;
// const compareBMI2 = markBMI2 > johnBMI2;

// console.log("Q1");
// console.log(1);
// console.log("Mark Weight", markWeightQ1);
// console.log("Mark Height", markHeightQ1);
// console.log("John Weight", johnWeightQ1);
// console.log("John Weight", johnHeightQ1);
// console.log(2);
// console.log("Mark Weight", markWeightQ2);
// console.log("Mark Height", markHeightQ2);
// console.log("John Weight", johnWeightQ2);
// console.log("John Weight", johnHeightQ2);
// console.log("--------------------------------------");
// console.log("Q2");
// console.log('Mark BMI 1', markBMI1);
// console.log('Mark BMI 2', markBMI2);
// console.log('John BMI 1', johnBMI1);
// console.log('John BMI 2', johnBMI2);
// console.log("--------------------------------------");
// console.log("Q3");
// console.log(compareBMI1);
// console.log(compareBMI2);

// const firstName = 'Ng';
// const job = 'consultant';
// const birthYear = 2000;
// const year = 2022;

// const weijian = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '.';

// console.log(weijian);

// const weijianNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}.`;
// console.log(weijianNew);

// asm 5

// const country = "Malaysia";
// const isIsland = false;
// const continent = "Asia";
// let population = 32.7;
// const language = 'Mandarin';
// let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);


// const age = 12;
// const isOldEnought = age >= 18;

// if (isOldEnought) {
//     console.log('Old 😘');
// } else {
//     const yearLeft = 18 - age;
//     console.log(`youger ${yearLeft}`);
// }

// const birthYear = 2000;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//asm 6

// const country = "Malaysia";
// const isIsland = false;
// const continent = "Asia";
// let population = 32;
// const language = 'Mandarin';
// const average = 33;
// let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// if (population >= average) {
//     console.log(`${country}'s is above average`);
// } else {
//     const gap = average - population;
//     console.log(`${country}'s population is ${gap} million below average`);
// }

//coding challenge #2
// const markWeightQ1 = 78;
// const markHeightQ1 = 1.69;
// const johnWeightQ1 = 92;
// const johnHeightQ1 = 1.95;
// const markWeightQ2 = 95;
// const markHeightQ2 = 1.88;
// const johnWeightQ2 = 85;
// const johnHeightQ2 = 1.76;
// const markBMI1 = markWeightQ1 / (markHeightQ1 ** 2);
// const markBMI2 = markWeightQ2 / (markHeightQ2 ** 2);
// const johnBMI1 = johnWeightQ1 / (johnHeightQ1 ** 2);
// const johnBMI2 = johnWeightQ2 / (johnHeightQ2 ** 2);
// const compareBMI1 = markBMI1 > johnBMI1;
// const compareBMI2 = markBMI2 > johnBMI2;

// console.log("Q1");
// console.log(1);
// console.log("Mark Weight", markWeightQ1);
// console.log("Mark Height", markHeightQ1);
// console.log("John Weight", johnWeightQ1);
// console.log("John Weight", johnHeightQ1);
// console.log(2);
// console.log("Mark Weight", markWeightQ2);
// console.log("Mark Height", markHeightQ2);
// console.log("John Weight", johnWeightQ2);
// console.log("John Weight", johnHeightQ2);
// console.log("--------------------------------------");
// console.log("Q2");
// console.log('Mark BMI 1', markBMI1);
// console.log('Mark BMI 2', markBMI2);
// console.log('John BMI 1', johnBMI1);
// console.log('John BMI 2', johnBMI2);
// console.log("--------------------------------------");
// console.log("Q3");
// console.log(compareBMI1);
// console.log(compareBMI2);

// if (markBMI1 > johnBMI1) {
//     console.log(`Mark's(${markBMI1}) BMI is higher than John's(${johnBMI1}).`);
// } else {
//     console.log(`John's(${johnBMI1}) BMI is higher than Mark's(${markBMI1}).`);
// }

// if (markBMI2 > johnBMI2) {
//     console.log(`Mark's(${markBMI2}) BMI is higher than John's(${johnBMI2}).`);
// } else {
//     console.log(`John's(${johnBMI2}) BMI is higher than Mark's(${markBMI2}).`);
// }

// const inputYear = '1991';
// console.log(Number(inputYear) + 22);
// console.log(inputYear + 22);

// // important*
// let n = '1' + 1; //11
// n = n - 1; // 11 - 1
// console.log(n); // 10

//asm 7

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);


