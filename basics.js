// Expressions, Statements, Variables, Data Types, Operators, Type Conversion, Type Coercion, Template Literals
var a = 10
var b = 20.25
var c = true
var d = false
var e = "ducat"
var f = 'education'
var g = `
         <h1>hello</h1>
         <h2>hello</h2>
         <h3>hello</h3> `

console.log(a, typeof a)
console.log(b, typeof b)
console.log(c, typeof c)
console.log(d, typeof d)
console.log(e, typeof e)
console.log(f, typeof f)
console.log(g, typeof g)

var a = 10
var b = 20
var c = a + b
console.log(c)
console.log(a, "+", b, "=", c)
console.log(a + "+" + b + "=" + c)
console.log(`${a}+${b}=${c}`)

var a = 10 / 3
console.log(a.toFixed(2))
console.log(a.toFixed(5))
