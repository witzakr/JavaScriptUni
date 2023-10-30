const prompt = require("prompt-sync")();
const fs = require("fs");

class Player {
    
    constructor(name, age, occupation, country_of_residence) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.country_of_residence = country_of_residence;
    }
}

let players = [];

const clearList = prompt("Do you want to clear the list of players? (yes/no): ");
if (clearList.toLowerCase() === "yes") {
    players = [];
} 

if (clearList.toLowerCase() !== "no") {
    for (let i = 0; i < 2; i++) {
        const name = prompt(`Enter the name of a player #${i + 1}: `);
        const age = parseInt(prompt(`Enter the age of a player #${i + 1}: `));
        const occupation = prompt(`Enter the occupation of a player #${i + 1}: `);
        const country_of_residence = prompt(`Enter the country of residence of a player #${i + 1}: `);

        const player = new Player(name, age, occupation, country_of_residence);
        players.push(player);
    }

    const jsonData = JSON.stringify(players, null, 4);
    fs.writeFileSync("players.json", jsonData);
}

try {
    const data = fs.readFileSync("players.json");
    players = JSON.parse(data);
    console.log("List of players:");
    players.forEach((player, index) => {
        console.log(`Player ${index + 1}: Name - ${player.name}, Age - ${player.age}, Occupation - ${player.occupation}, Country of residence - ${player.country_of_residence}`);
    });
    console.log("Data has been saved to players.json");
} catch (error) {
    console.error("Error reading or displaying player data:", error);
}

const player1 = players[0];
const player2 = players[1];

console.log("\nLet's play a guessing game!");

const numberToGuess = Math.floor(Math.random() * 100) + 1;

function playGame(player) {
    for (let attempts = 0; attempts < 4; attempts++) {
        const guess = parseInt(prompt(`${player.name}, make your guess (between 1 and 100): `));
        if (guess === numberToGuess) {
            console.log(`Congratulations, ${player.name}! You guessed the correct number: ${numberToGuess}`);
            process.exit(0);
        } else if (guess < numberToGuess) {
            console.log("Your guess is too low.");
        } else {
            console.log("Your guess is too high.");
        }
    }
    console.log(`Sorry, ${player.name}. You have used all your attempts. The correct number was ${numberToGuess}.`);
}

while (true) {
    playGame(player1);
    playGame(player2);
}