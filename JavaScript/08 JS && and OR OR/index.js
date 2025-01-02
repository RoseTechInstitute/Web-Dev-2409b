let minPercentage = 60;
let minAge = 18


let userPercent = 85
let userAge = 25

if(userPercent >= minPercentage && userAge >= minAge){
    console.log("Yes! you're eligible")
}else{
    console.log("Sorry, You're not eligible")
}


let country = "pakistan"

let province = "sindh"

let userContry = "pakistan"
let userProvince = "punjab"

if(userContry === country || userProvince === province){
    console.log("Your welcome")
}else{
    console.log("Our service isn't availble in your region")
}
