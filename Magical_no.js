//WAP to check weather the given number is magical or not
//Input: 1729
//Output: Magical
//Date of creation: 19-03-21
var num = Number(prompt("Enter a number: "));
var sum = 0;
var temp = num;
while (num != 0) {
    var digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}
if (sum == 1) {
    document.writeln("Magical");
}
else {
    document.writeln("Not Magical");
}
