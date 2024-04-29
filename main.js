// Joshua Phillips
// 4/29/24
// Project

//in
const firstName = "Joshua";
const lastName = "Phillips";
const school = "Alba High School"


const vigiGames = [
    " Smite",
    " Warframe",
    " Grounded",
    " ASE"
];
//pr
let length = vigiGames.length;

//ou
console.log(`*** Script written by ${firstName} ${lastName} of ${school}***`);
console.log('\n');

console.log(`My video games array: ${vigiGames}`);
console.log(`Length of array: ${length} elements`);
console.log('\n');

vigiGames.push(" OverwatchTwo");
console.log("Adding OverwatchTwo using push() methode:")
console.log(`Updated array: ${vigiGames}`)
console.log('\n');

vigiGames.unshift("Smite 2")
console.log("Adding OverwatchTwo using unshift() methode:")
console.log(`Updated array: ${vigiGames}`)

