// define the first function: gameObject
function gameObject() {
    let teamFixtureObject = {
        home: {
            teamName: "Brooklyn Nets", // string of the team name
            colors: ["Black", "White"], // array of strings that are that team's colors.
            players: {
                "Alan Anderson": { // name object as string, and stats properties
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": { 
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
    return teamFixtureObject;
};

console.log(gameObject()); // call gameObject function

// homeTeamName, a function that returns the name of the home team, "Brooklyn Nets".
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

console.log(homeTeamName());
// logs "Brooklyn Nets"


/* ---FUNCTION BUILDING--- */

console.log("\n 1.--------- numPointsScored function ---------");
// numPointsScored Takes player's name as argument and return the number of points scored for that player.
function numPointsScored(playersName) {
    let teamFixtureObject = gameObject(); // Call global gameObject function
    
    let homeTeam = teamFixtureObject.home; // Acess home team data
    let awayTeam = teamFixtureObject.away; // Get away team data

    let newPlayersObject = {...teamFixtureObject.home, ...teamFixtureObject.away};
    console.log(newPlayersObject);
    
    // Validate whether the player belong to homeTeam or awayTeam
    //let awayTeamPlayerpoints;
    let homeTeamPlayerpoints = homeTeam.players[playersName] === undefined ? `No valid points from this team. check Away Team: ${awayTeam.teamName}`: homeTeam.players[playersName].points
    let awayTeamPlayerpoints = awayTeam.players[playersName] === undefined ? `No valid points from this team. check Home Team: ${homeTeam.teamName}`: awayTeam.players[playersName].points
    
    if (homeTeamPlayerpoints) {
        console.log(`${playersName} plays for ${homeTeam.teamName}. He has ${homeTeamPlayerpoints} points`);
        return homeTeamPlayerpoints; // end the function in this case
    } else if (awayTeamPlayerpoints){
        console.log(`${playersName} plays for ${awayTeam.teamName}. He has ${awayTeamPlayerpoints} points`);
        return awayTeamPlayerpoints;
    }
    debugger
};

// Testing numPointsScored Function:
let playerName = "Alan Anderson"
let playerScore = numPointsScored(playerName);
console.log (`${playerName}'s score is: ${playerScore}`);
// debugger


console.log("\n 2.--------- shoeSize function ---------");
// shoeSize Takes player's name as argument and returns the shoe size for that player.
function shoeSize(playersName) {
    let teamFixtureObject = gameObject(); // Call global gameObject function
    
    let homeTeam = teamFixtureObject.home; // Acess home team data
    let awayTeam = teamFixtureObject.away; // Acess away team data
    
    // Validate whether the player belong to homeTeam or awayTeam
    let homeTeamPlayershoe = homeTeam.players[playersName] === undefined ? `No valid data from this team. check Away Team: ${awayTeam.teamName}`: homeTeam.players[playersName].shoe
    let awayTeamPlayershoe = awayTeam.players[playersName] === undefined ? `No valid data from this team. check Home Team: ${homeTeam.teamName}`: awayTeam.players[playersName].shoe
    
    if (homeTeamPlayershoe) {
        console.log(`${playersName} plays for ${homeTeam.teamName}. His shoe size is ${homeTeamPlayershoe}`);
        return homeTeamPlayershoe; // end the function in this case
    } else if (awayTeamPlayershoe){
        console.log(`${playersName} plays for ${awayTeam.teamName}. His shoe size is ${awayTeamPlayershoe}`);
        return awayTeamPlayershoe;
    }
    // debugger
};

// Testing numPointsScored Function:
let playerShoeSize = shoeSize(playerName);
console.log (`${playerName}'s shoe size is: ${playerShoeSize}`);
// debugger


console.log("\n 3.--------- teamColors function ---------");
// teamColors Takes team name as argument and returns an array of that teams colors.
function teamColors(teamsName) {
    let teamFixtureObject = gameObject(); // Call global gameObject function

    let homeTeamName = teamFixtureObject.home.teamName; // Get the name of home team
    let awayTeamName = teamFixtureObject.away.teamName; // Get the name of away team

    let teamNamesWeHave = []; // initialize an array to hold team names
    teamNamesWeHave.push(homeTeamName, awayTeamName); // we only have two team names

    let locateTeamsName = teamNamesWeHave.find(team_Name => team_Name === teamsName); // locate teamsName from available team names

    let arrayOfTheTeamsColors;
    if (locateTeamsName === undefined) {
        return "Team not found. No way to retrieve team colors."; // end the program if the team was not found
    } else {
        if (locateTeamsName === homeTeamName) {
            arrayOfTheTeamsColors = teamFixtureObject.home.colors;
            console.log(`${teamsName} is a Home Team. It has the following colors: ${arrayOfTheTeamsColors}`)
        } else if (locateTeamsName === awayTeamName) {
            arrayOfTheTeamsColors = teamFixtureObject.away.colors;
            console.log(`${teamsName} is an Away Team. It has the following colors: ${arrayOfTheTeamsColors}`);
        };
    };

    return arrayOfTheTeamsColors;
};
// debugger

// Testing numPointsScored Function:
let teamName = "Charlotte Hornets";
let teamColorsResponse = teamColors(teamName);
console.log (`${teamName} Uniform colors: ${teamColorsResponse}`);
console.log (Array.isArray(teamColorsResponse));
// debugger


console.log("\n 4.--------- teamNames function ---------");

// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
    let teamFixtureObject = gameObject();
    
    let homeTeamName = teamFixtureObject.home.teamName; // home teamName
    let awayTeamName = teamFixtureObject.away.teamName;
    
    let arrayOfTeamNames = [homeTeamName, awayTeamName]; // enclose in [] to convert to array.
    console.log("arrayOfTeamNames:", arrayOfTeamNames);
    return arrayOfTeamNames // return array of the team names.
};

teamNames(); // invoke teamNames function
// debugger


console.log("\n 5.--------- playerNumbers function ---------");

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
function playerNumbers(team_Name) {
    let teamFixtureObject = gameObject();

    // assess whether the teamName is home or away, and correctly get players of the team, which is an object in our case.
    let playersObject = (team_Name === teamFixtureObject.home.teamName) ? teamFixtureObject.home.players: teamFixtureObject.away.players;
    console.log(`${team_Name} players:`, playersObject);
    
    let arrayOfPlayerNames = Object.keys(playersObject); // loop through, and acess keys of our playersObject. 
    console.log("playersObject Keys are:", arrayOfPlayerNames);
    
    // dynamically use our arrayOfPlayerNames to access playerStats objects- values of playersObject. 
    let teamJerseyNumbers = arrayOfPlayerNames.map(playerName => {
        let groupTeamJerseyNumbers = playersObject[playerName].number; // Access the value of number key through playersObject. Number is one of playerStats' keys.
        return groupTeamJerseyNumbers; // map method will return an array
    });
    
    return teamJerseyNumbers // return an array of the jersey numbers.
};

let nameOfTeam = "Charlotte Hornets" // can be "Brooklyn Nets" or  "Charlotte Hornets"
let playerStatsArray = playerNumbers(nameOfTeam); // invoke teamNames function with teamName. 
console.log(`Array of jersey numbers for ${nameOfTeam}:`, playerStatsArray); 
// debugger


console.log("\n 6.--------- playerStats function ---------");

// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.
function playerStats(playersName) {
    let teamFixtureObject = gameObject();

    let homeTeam = teamFixtureObject.home; // Acess home team data
    let awayTeam = teamFixtureObject.away;
    
    // Validate whether the player belong to homeTeam or awayTeam
    let objectOfPlayerStats = homeTeam.players[playersName] === undefined ? awayTeam.players[playersName]: homeTeam.players[playersName];
    
    return objectOfPlayerStats; // return an object of the player's stats.
};

let resultingObject = playerStats("Alan Anderson"); // "Alan Anderson" home team or "Jeff Adrien" away team player. 
console.log(resultingObject);
// debugger


console.log("\n 7.--------- bigShoeRebounds function ---------");
// debugger
// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.
function bigShoeRebounds() {
    // First, find the player with the largest shoe size
    let teamFixtureObject = gameObject();
    
    let newPlayersObject = {...teamFixtureObject.home.players, ...teamFixtureObject.away.players}; // since we have different(non-identical) keys, we can comfortably concatenate using the spread operator as no overwritting will occur. 
    console.log("newPlayersObject", newPlayersObject); // log the new object.
    let arrayOfPlayerNames = Object.keys(newPlayersObject); // get array of player names.
    console.log("arrayOfPlayerNames", arrayOfPlayerNames);
    // debugger
    let maxShoeSize = -1; // initialize maximum shoe size to -1.
    let playerWithTheLargestShoeSize;
    
    arrayOfPlayerNames.forEach(playerName => {  
        let shoeSizesOfPlayers = newPlayersObject[playerName].shoe
        if (shoeSizesOfPlayers > maxShoeSize) {
            maxShoeSize = shoeSizesOfPlayers;
            playerWithTheLargestShoeSize = playerName;
        };
      }
    );
    // debugger
    console.log("The largest shoe size is:", maxShoeSize);
    console.log("Player with the largest shoe size is:", playerWithTheLargestShoeSize);
    
    // Then, return that player's number of rebounds
    let playersNumberOfRebounds = newPlayersObject[playerWithTheLargestShoeSize].rebounds
    return playersNumberOfRebounds;
};

console.log("Number of rebounds associated with the player with the largest shoe size:", bigShoeRebounds()); // invoke bigShoeRebounds



/* ---BONUS QUESTIONS--- */
console.log("\n 1.--------- other functions ---------");

// Define functions to return the answer to the following questions:
// 1. Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
    let teamFixtureObject = gameObject();
    let homeTeamPlayers = teamFixtureObject.home.players; // Get home team data
    let awayTeamPlayers = teamFixtureObject.away.players;
    
    // get array of players for home and away team
    let arrayOfhomeTeamPlayers = Object.keys(homeTeamPlayers); // arrayOfhomeTeamPlayers
    let arrayOfawayTeamPlayers = Object.keys(awayTeamPlayers); // arrayOfawayTeamPlayers

    // declare variables to track the player with most points.
    let InitialPoints = -1;
    let mostponts;
    let playerWithMostPoints;
    
    // loop through home team players, comparing their points.
    for (playerName of arrayOfhomeTeamPlayers) {
        mostponts = homeTeamPlayers[playerName].points // get the points for the current player iterated upon.
        if (mostponts > InitialPoints) { // if greater than initial or points of previous player...
            InitialPoints = mostponts; // update initial points with the current greater player points.
            playerWithMostPoints = playerName;
        };
    };

    // iterate over away team players accessing and comparing their points.
    for (playerName of arrayOfawayTeamPlayers) {
        mostponts = awayTeamPlayers[playerName].points 
        if (mostponts > InitialPoints) { 
            InitialPoints = mostponts; 
            playerWithMostPoints = playerName; // track the player with most points
        };
    };

    return playerWithMostPoints;
}

console.log("The player with most points is:", mostPointsScored());

console.log("\n 2.--------- winningTeam function ---------");
// 2. Which team has the most points? Call the function winningTeam.
function winningTeam() {
    
    let teamFixtureObject = gameObject();
    let homeTeamPlayers = teamFixtureObject.home.players; // Get home team data
    let awayTeamPlayers = teamFixtureObject.away.players;
    
    // get array of players for home and away team
    let arrayOfhomeTeamPlayers = Object.keys(homeTeamPlayers); // arrayOfhomeTeamPlayers
    let arrayOfawayTeamPlayers = Object.keys(awayTeamPlayers); // arrayOfawayTeamPlayers

    // declare variables to track total points in each team.
    let InitialHomeTeamPoints = 0;
    let InitialAwayTeamPoints = 0;
    let teamWithMostPoints;
    
    // loop through home team players, adding each players points to InitialHomeTeamPoints.
    for (playerName of arrayOfhomeTeamPlayers) {
        InitialHomeTeamPoints += homeTeamPlayers[playerName].points // pile up the points of each player in InitialHomeTeamPoints variable.
    };

    // loop through away team players, adding each players points to InitialAwayTeamPoints.
    for (playerName of arrayOfawayTeamPlayers) {
        InitialAwayTeamPoints += awayTeamPlayers[playerName].points
    };

    teamWithMostPoints = InitialHomeTeamPoints > InitialAwayTeamPoints ? "Home Team" : "Away Team";

    return teamWithMostPoints;
};

console.log("winningTeam is:", winningTeam());

console.log("\n 3.--------- playerWithLongestName function ---------");
// 3. Which player has the longest name? Call the function playerWithLongestName.
function playerWithLongestName() {
    let teamFixtureObject = gameObject();
    
    // concatenate non-identical keys using the spread operator.
    let newPlayersObject = {...teamFixtureObject.home.players, ...teamFixtureObject.away.players};
    
    let arrayOfPlayerNames = Object.keys(newPlayersObject); // get array of player names.
    console.log("arrayOfPlayerNames", arrayOfPlayerNames);
    
    let initialLengthOfPlayersName = 0; // initialize lengthOfPlayersName to 0.
    let playerWithLongestName;
    
    arrayOfPlayerNames.forEach(playerName => {  
        console.log(typeof playerName);
        let currentLengthOfPlayersName = playerName.length // get currentLengthOfPlayersName.
        
        if (currentLengthOfPlayersName > initialLengthOfPlayersName) { // if currentLengthOfPlayersName is greater...
            initialLengthOfPlayersName = currentLengthOfPlayersName; // update initialLengthOfPlayersName with the currentLengthOfPlayersName.
            playerWithLongestName = playerName;
        };
      }
    );

    return playerWithLongestName;
};

console.log(playerWithLongestName());


/* ---SUPER BONUS--- */
// 1. Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.
console.log("\n 1.--------- doesLongNameStealATon function ---------");

function doesLongNameStealATon() {
    let playerWithTheLongestName = playerWithLongestName() // call playerWithLongestName function to get playerWithTheLongestName.

    let teamFixtureObject = gameObject(); // call the game object with all player info.
    
    // Find playerWithMostSteals.
    // concatenate non-identical properties using the spread operator.
    let newPlayersObject = {...teamFixtureObject.home.players, ...teamFixtureObject.away.players};
    
    let arrayOfPlayerNames = Object.keys(newPlayersObject); // get array of player names.
    
    // declare variables to track the player with most steals.
    let InitialSteals = -1;
    let mostSteals;
    let playerWithMostSteals;
    
    arrayOfPlayerNames.forEach(playerName => {  
        mostSteals = newPlayersObject[playerName].steals // iterate over each player and get their steals.
        
        if (mostSteals > InitialSteals) { // if steals of the current player iterated upon is greater than that of previously recorded highest steal,
            InitialSteals = mostSteals; // update InitialSteals with the current player with mostSteals.
            playerWithMostSteals = playerName;
        };
      }
    );

    // Find out whether the player with the longest name had the most steals.
    if (playerWithTheLongestName === playerWithMostSteals) {
        return true;
    } else {
        return `Unfortunately, player with the longest name, ${playerWithTheLongestName}, is not the same player who had the most steals. 
        ${playerWithMostSteals} did.`
    };
};

console.log(doesLongNameStealATon()); // invoke doesLongNameStealATon function.
