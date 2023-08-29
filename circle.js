//WAP to print area of circle
//Area of circle = pi*r*r
//pi = 3.14
var pi = 3.14
var r = Number(prompt("Enter radius of circle"))
var area = pi * r * r
console.log(area.toFixed(2))
//document.write() is used to write on html page
document.write("radius of circle = ")
document.write(r)
document.write("<br>")
document.write("Area of circle = ")
document.write(area.toFixed(2)) 