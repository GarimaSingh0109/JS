//WAP to check weather the given number is armstrong or not
//Input: 153
//Output: Armstrong
//Date of creation: 19-03-21
var num = Number(prompt("Enter a number: "));
var sum = 0;
var temp = num;
while (temp != 0) {
    var digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
}
if (sum == num) {
    document.writeln("Armstrong");
}
else {
    document.writeln("Not Armstrong");
}
