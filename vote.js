//WAP to check weather a person is eligible to vote or not?
//If age is less than 18 then print "You are not eligible to vote"
//If age is greater than or equal to 18 then print "You are eligible to vote"
//If age is less than 0 then print "Please give a valid age"
//var age = 23
var age = Number(prompt("Enter your age"))
age >= 18 ?
    //console.log("You are eligible to vote")
    document.write("You are eligible to vote") :
    //: console.log("You are not eligible to vote")
    document.write("You are not eligible to vote")