//WAP to reverse a no. 
//Input: 12345
//Output: 54321
//Date of creation: 19-03-21
var num = Number(prompt("Enter a number: "))
var rev = 0
while (num != 0) {
    var digit = num % 10
    rev = rev * 10 + digit
    num = Math.floor(num / 10)
}
document.writeln("Reverse of the number: " + rev)