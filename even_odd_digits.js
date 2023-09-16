//WAP to count even and odd digits in a number
//Input: 12345
//Output: Even digits count: 2
//        Odd digits count: 3
//Date of creation: 19-03-21
var num = Number(prompt("Enter a number: "))
var even_count = 0
var odd_count = 0
while (num != 0) {
    var digit = num % 10
    if (digit % 2 == 0) {
        even_count += 1
    }
    else {
        odd_count += 1
    }
    num = Math.floor(num / 10)
}
document.writeln("Even digits count: " + even_count)
document.writeln("Odd digits count: " + odd_count)
