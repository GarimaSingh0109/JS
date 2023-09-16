//WAP to check weather the given number is palindrome or not
//Input: 12321
//Output: Palindrome
//Date of creation: 19-03-21
var num = Number(prompt("Enter a number: "));
var rev = 0;
var temp = num;
while (num != 0) {
    var digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}
if (rev == temp) {
    document.writeln("Palindrome");
}
else {
    document.writeln("Not Palindrome");
}
