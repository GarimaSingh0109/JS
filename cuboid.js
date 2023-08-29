//WAP to find area of cuboid 
// Input: length, breadth and height
// area = 2(length * breadth + breadth * height + height * length)
// Output: area of cuboid
var length = Number(prompt("Enter the length"))
var width = Number(prompt("Enter the width"))
var height = Number(prompt("Enter the height"))
//var length = 10;
//var width = 20;
//var height = 30;
var area = 2 * (length * width + width * height + height * length);
//console.log("Area of cuboid is " + area);
document.write("Area of cuboid is " + area);