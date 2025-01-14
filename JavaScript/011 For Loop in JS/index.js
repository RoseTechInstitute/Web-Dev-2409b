// let animals =  ["cat","dog", "fish","bakri"];

// let newAnimals = []


// for(let i = 0; i<animals.length; i++){
//     newAnimals.push(animals[i])
//     console.log(newAnimals)
// }

let ourServiceAreas = ["karachi", "islamabad", "Quetta"]

let userResponse = "karachi"

// Not Recommended

// if(userResponse === ourServiceAreas[0]){
//     console.log("Yes we offer servies here")
// } else if(userResponse === ourServiceAreas[1]){
//     console.log("Yes we offer servies here")
// } else if(userResponse === ourServiceAreas[2]){
//     console.log("Yes we offer servies here")
// }else{
//     console.log("Sorry We don't deliver in you area")
// }
let isFound = false
for (let i = 0; i < ourServiceAreas.length; i++) {
    if (userResponse === ourServiceAreas[i]) {
        isFound = true
        break;
    }
    else {
        isFound = false
    }
}
isFound ? console.log("yes"):console.log("no")