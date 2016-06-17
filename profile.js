//problem: we need a simple way to look at user badge count and Javascript
//points Solution: use Node.js to connect to treehouse api to get profirel information to print out
var https = require("https");

//print out message
function printUserInfo (username, badgeCount, points) {          
	var message = username + " has " + badgeCount + " badges and " + points + " points in Javascript";
	console.log(message);
}

//print out error messages
function printError(error) {
	console.error(error.message);
}

function get(username){
	//connect to API url (https:teamtreehouse.com/username.json) 
	var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
		var body = "";
	//Read the data
	response.on('data', function(chunk) {
		body += chunk;
	});

	response.on('end', function(chunk){
		if(response.statusCode == 200) {
			try {
				var profile = JSON.parse(body);
				printUserInfo(username, profile.badges.length, profile.points.JavaScript);
			} catch(error) {
				//parse error 
				printError(error);
			}
		} else {
			printError({message: "there was an error getting the profile for" + username + ". (" + https.STATUS_CODES[response.statusCode] + ")"});
		}
	});
	//Parse the data 
	//Print the data
	});

	//connection error
	request.on("error", printError);
};



module.exports.get = get;