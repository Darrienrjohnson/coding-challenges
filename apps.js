/*
const answer = prompt("Which planet is closest to the sun?");

if (answer.toUpperCase() === "MERCURY") {
  console.log("Thats correct!");
} else {
  console.log("Sorry, that's incorrect.");
}
*/

//----------------End of Code------------------

//Coding Challenge from teamTreeHouse
//Create a quiz application

//1. Store correct answers
let correct = 0;

//2. Store the rank of the player
let rank;

//3. Select the <main> HTML element

/* used the document.querySelector method to display the final message on the screen. access the main element and stored value in the variable main */

const main = document.querySelector("main");

/* 4. Ask at least 5 questions
-Store each answer in a variable
-Keep track of the number of correct answers
*/
const answer1 = prompt("What color is the grass?");
if ( answer1.toLowerCase() === 'green' ) {
	correct += 1;
}
const answer2 = prompt("What color is the ocean?");
if (answer2.toLowerCase() === 'blue') {
	correct += 1;
}
const answer3 = prompt("What color are stop signs?");
if (answer3.toLowerCase() === 'red') {
	correct += 1;
}
const answer4 = prompt("What color are banans?");
if (answer4.toLowerCase() === 'yellow') {
	correct += 1;
}
const answer5 = prompt("What color are pumpkins?");
if (answer5.toLowerCase() === 'orange') {
	correct += 1;
}

/* 5. Rank player based on number of correct answers
- 5 correct = Gold
- 3-4 correct = Silver
- 1-2 correct = Bronze
- 0 = No Crown 
*/
if (correct === 5) {
	rank = "Gold";
} else if (correct >= 3) {
	rank = "Silver";
} else if (correct >= 1) {
	rank = "Bronze";
} else {
	rank = "None";
}

// 6. Output results to the <main> element

//template literal to output results to page
main.innerHTML = `
<h2>You got ${correct} out of 5 questions correct</h2>
<p>Crown earned: <strong>${rank}</strong></p>
`;
//--------------- End of Code------------------