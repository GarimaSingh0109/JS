//WAP to calculate sum of even and odd digits of a specific number 
//Input: 12345
//Output: Even digits sum: 6
//        Odd digits sum: 9
//Date of creation: 19-03-21
var num = Number(prompt("Enter a number: "))
var even_sum = 0
var odd_sum = 0
while (num != 0) {
    var digit = num % 10
    if (digit % 2 == 0) {
        even_sum += digit
    }
    else {
        odd_sum += digit
    }
    num = Math.floor(num / 10)
}
document.writeln("Even digits sum: " + even_sum)
document.writeln("Odd digits sum: " + odd_sum)
