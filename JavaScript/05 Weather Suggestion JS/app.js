let userInput = prompt("Write Your City Name Here.");

userInput = userInput.toLowerCase()

if (userInput === "karachi") {
  alert("take your jacket on");
} else if (userInput === "hydrabad") {
  alert("Avoid night outings");
} else if (userInput === "islamabad") {
  alert("Its too cold at night");
}else if(userInput === "lahore"){
  alert("Its to Cold here");
} else {
  alert("Sorry, We have not Data for your city");
}
