//WAP to check weather the given number is neon or not (1,9)
//(Neon number is a number where the sum of digits of square of the number is equal to the number itself)
//Input: 9
//Output: Neon
//Date of creation: 19-03-21
var num = Number(prompt("Enter a number: "));
var square = num * num;
var sum = 0;
while (square != 0) {
    var digit = square % 10;
    sum += digit;
    square = Math.floor(square / 10);
}
if (sum == num) {
    document.writeln("Neon");
}
else {
    document.writeln("Not Neon");
}
