//problem: we need a simple way to look at user badge count and Javascript
//points Solution: use Node.js to connect to treehouse api to get profirel information to print out
var https = require("https");
var username = "andrewglibbery";

function printUserInfo (username, badgeCount, points) {          
	var message = username + " has " + badgeCount + " badges and " + points + " points in Javascript";
	console.log(message);
}



//connect to API url (https:teamtreehouse.com/username.json) 
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
	var body = "";
//Read the data
response.on('data', function(chunk) {
	body += chunk;
});

response.on('end', function(chunk){
	console.log(body);
});
//Parse the data 
//Print the data
});

request.on("error", function(error) {
	console.error(error.message);
});

