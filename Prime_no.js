//WAP to check weather the given number is prime or not
//Input: 5
//Output: Prime
//Date of creation: 19-03-21
var num = Number(prompt("Enter a number: "));
var flag = 0;
for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
        flag = 1;
        break;
    }
}
if (flag == 0) {
    document.writeln("Prime");
}
else {
    document.writeln("Not Prime");
}
