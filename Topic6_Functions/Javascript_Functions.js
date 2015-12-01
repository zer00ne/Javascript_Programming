/*
Every function in JavaScript is a Function object. 
Because, every function has an associated prototype object member [[Prototype]] that refers to Function.prototype.

Functions are not the same as procedures. A function always returns a value, but a procedure may or may not return any value.

To return a specific value other than the default, a function must have a return 
statement that specifies the value to return. A function without a return statement
will return a default value. In the case of a constructor called with the new keyword,
the default value is the value of its this parameter. For all other functions, 
the default return value is undefined.

The parameters of a function call are the function's arguments.
Arguments are passed to functions by value. If the function changes the value of an
argument, this change is not reflected globally or in the calling function. However, 
object references are values, too, and they are special: if the function changes the 
referred object's properties, that change is visible outside the function, as shown
in the following example:
*/

/* Declare the function 'myFunc' */
function myFunc(theObject) {
   theObject.brand = "Toyota";
 }
 
 /*
  * Declare variable 'mycar';
  * create and initialize a new Object;
  * assign reference to it to 'mycar'
  */
 var mycar = {
   brand: "Honda",
   model: "Accord",
   year: 1998
 };

 /* Logs 'Honda' */
 console.log(mycar.brand);

 /* Pass object reference to the function */
 myFunc(mycar);

 /*
  * Logs 'Toyota' as the value of the 'brand' property
  * of the object, as changed to by the function.
  */
 console.log(mycar.brand);






 /*
Defining functions
There are several ways to define functions:

The function declaration (function statement)
There is a special syntax for declaring functions:
 
Syntax:
function name([param[, param[, ... param]]]) {
   statements
}

name
The function name.

param
The name of an argument to be passed to the function. A function can have up to 255 arguments.

statements
The statements comprising the body of the function.
 

The function expression

A function expression is similar to and has the same syntax as a function declaration:
 */

 // function declaration
function foo() {}



// function expression
(function bar() {})

// function expression
x = function hello() {}


if (x) {
   // below function expression is equivalent to var world = function world() {};
   function world() {}
}


// function declaration
function a() {
   // function declaration
   function b() {}
   if (0) {
      // Below function expression is equivalent to  var c = function c() {};
      function c() {}
   }
}


/*
Every function has two members __proto__ and prototype.

Every function that is created using functionexpression / functiondeclaration / functionconstructor
has it's own members 'arguments', 'length', 'name' and inherited properties thru '__proto__' like 
'constructor','apply', 'bind', 'call','isGenerator','toSource','toString'. These properties are
inherited from Function.prototype

'Function.prototype' cannot be modified.

*/


// Example using Function constructor

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function('a', 'b', 'return a + b');

// Call the function
adder(2, 6);
// > 8






/*
Generator functions can be defined using generator function declaration, generator function expression
and GeneratorFunction constructor.

They all produce Generator object

The main difference between a function* expression and a function* statement is the function name,
which can be omitted in function* expressions to create anonymous functions.

Generator comprehension is alternate syntax for Generator function

*/

//generator function expression
var x = function*(y) {
   yield y * y;
};

//generator function declaration
function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

//GeneratorFunction constructor
var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction("a", "yield a * 2");
var iterator = g(10);
console.log(iterator.next().value); // 20
