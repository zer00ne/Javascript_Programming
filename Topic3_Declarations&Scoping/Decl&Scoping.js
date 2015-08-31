/*
The variable statement declares a variable, optionally initializing it to a value.

Syntax:
var varname1 [= value1 [, varname2 [, varname3 ... [, varnameN]]]];

varnameN
Variable name. It can be any legal identifier.
valueN
Initial value of the variable. It can be any legal expression.

An identifier needs to start with $, _, "any Unicode code point with the Unicode property “ID_Start”",
or an escape sequence for one of the previous. http://unicode.org/reports/tr31/#Figure_Code_Point_Categories_for_Identifier_Parsing

Variable declarations, wherever they occur, are processed before any code is executed.
The scope of a variable declared with var is its current execution context, which is
either the enclosing function or, for variables declared outside any function, global.

*/

/*
Assigning a value to an undeclared variable implicitly creates it as a global variable 
(it becomes a property of the global object) when the assignment is executed. The 
differences between declared and undeclared variables are:

1. Declared variables are constrained in the execution context in which they are 
declared. Undeclared variables are always global.
*/
function x() {
  y = 1;   // Throws a ReferenceError in strict mode
  var z = 2;
}

console.log(y); // logs "1" 
console.log(z); // Throws a ReferenceError: z is not defined outside x

console.log(a);
var a = 2;

/*
2. Declared variables are created before any code is executed. Undeclared variables 
do not exist until the code assigning to them is executed.
*/
console.log(x); 	// Throws a ReferenceError

/*
3. Declared variables are a non-configurable property of their execution context
(function or global). Undeclared variables are configurable (e.g. can be deleted).
*/
var a = 1;
b = 2;

delete this.a; // Throws a TypeError in strict mode. Fails silently otherwise.
delete this.b;

console.log(a, b); // Throws a ReferenceError. 
// The 'b' property was deleted and no longer exists.

/*
Because of these three differences, failure to declare variables will very
likely lead to unexpected results. Thus it is recommended to always declare
variables, regardless of whether they are in a function or global scope. 
*/

/*
var hoisting
Because variable declarations (and declarations in general) are processed
before any code is executed, declaring a variable anywhere in the code is 
equivalent to declaring it at the top. This also means that a variable can
appear to be used before it's declared. This behavior is called "hoisting",
as it appears that the variable declaration is moved to the top of the 
function or global code.
*/
bla = 2
var bla;
// ...

// is implicitly understood as:
var bla;
bla = 2;

/*
For that reason, it is recommended to always declare variables at the top
of their scope (the top of global code and the top of function code) so 
it's clear which variables are function scoped (local) and which are
resolved on the scope chain.
*/

/**
 * Example 1, 
 */
console.log(x === undefined); // logs "true"
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();



/**
 * Above Example 1 will be interpreted as
 */
var x;
console.log(x === undefined); // logs "true"
x = 3;
 
/**
 * Example 2
 */
var myvar = "my value";
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();








//Declaring and initializing two variables
var a = 0, b = 0;

//Assigning two variables with single string value
var a = "A";
var b = a;

// Equivalent to:
var a, b = a = "A";

//Be mindful of the order:
var x = y, y = 'A';
console.log(x + y); // undefinedA

/*
Here, x and y are declared before any code is executed, the assignments occur later.
At the time "x = y" is evaluated, y exists so no ReferenceError is thrown and its 
value is 'undefined'. So, x is assigned the undefined value. Then, y is assigned 
a value of 'A'. Consequently, after the first line, x === undefined && y === 'A',
hence the result.
*/

//Initialization of several variables
var x = 0;

function f(){
  var x = y = 1; // x is declared locally. y is not!
}
f();

console.log(x, y); // 0, 1
// x is the global one as expected
// y leaked outside of the function, though! 



/*
Implicit globals and outer function scope:
Variables that appear to be implicit globals may be references to variables 
in an outer function scope:
*/
var x = 0;  // x is declared global, then assigned a value of 0

console.log(typeof z); // undefined, since z doesn't exist yet

function a() { // when a is called,
  var y = 2;   // y is declared local to function a, then assigned a value of 2

  console.log(x, y);   // 0 2 

  function b() {       // when b is called
    x = 3;  // assigns 3 to existing global x, doesn't create a new global var
    y = 4;  // assigns 4 to existing outer y, doesn't create a new global var
    z = 5;  // creates a new global variable z and assigns a value of 5. 
  }         // (Throws a ReferenceError in strict mode.)

  b();     // calling b creates z as a global variable
  console.log(x, y, z);  // 3 4 5
}

a();                   // calling a also calls b
console.log(x, z);     // 3 5
console.log(typeof y); // undefined as y is local to function a













/*
The let statement declares a block scope local variable, optionally initializing it to a value.

The let keyword in Mozilla Firefox is only available to code blocks in HTML wrapped in a
<script type="application/javascript;version=1.7"> block (or higher version). 

Syntax:
let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];

let allows you to declare variables that are limited in scope to the block, statement, or
expression on which it is used. This is unlike the var keyword, which defines a variable
globally, or locally to an entire function regardless of block scope.

As of Aug-2015, only firefox supports ES6 standard that has 'let' facility.
*/


/*
Block scope with let
Use the let keyword to define variables inside a block.
*/
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}

//let sometimes makes the code cleaner when inner functions are used.
var list = document.getElementById("list");

for (var i = 1; i <= 5; i++) {
  var item = document.createElement("LI");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };
  list.appendChild(item);
}

/*
The example above works as intended because the five instances of the (anonymous)
inner function refer to five different instances of variable j. Note that it does
not work as intended if you replace let by var or if you remove the variable j and
simply use the variable i in the inner function.
*/


/*
Scoping rules
Variables declared by let have as their scope the block in which they are defined,
as well as in any contained sub-blocks . In this way, let works very much like var.
The main difference is that the scope of a var variable is the entire enclosing function:
*/
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}


/*
At the top level of programs and functions, let behaves exactly like var does. For example:
*/
var x = 'global';
let y = 'global';
console.log(this.x);
console.log(this.y);

/*
Temporal dead zone and errors with let
Redeclaration of the same variable in the same function or block scope raises a 'TypeError'.
*/
if (x) {
  let foo;
  let foo; // TypeError thrown.
}

/*
In ECMAScript 6, 'let' does not hoist the variable to the top of the block. If you reference
a variable in a block before the let declaration for that variable is encountered, this 
results in a 'ReferenceError', because the variable is in a "temporal dead zone" from 
the start of the block until the declaration is processed.
*/
function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}


//You may encounter errors in switch statements because there is only one underlying block.
switch (x) {
  case 0:
    let foo;
    break;
    
  case 1:
    let foo; // TypeError for redeclaration.
    break;
}

/*
let-scoped variables in for loops
You can use the let keyword to bind variables locally in the scope of for loops. This is
different from the var keyword in the head of a for loop, which makes the variables visible 
in the whole function containing the loop.

Scoping rules
for (let expr1; expr2; expr3) statement

In this example, expr2, expr3, and statement are enclosed in an implicit block that contains
the block local variables declared by let expr1. This is demonstrated in the first loop below.
*/
var i=0;
for ( let i=i ; i < 10 ; i++ ) {
  console.log(i);
}

/*
let vs var
When used inside a block, let limits the variable's scope to that block. Note the difference
between var whose scope is inside the function where it is declared
*/
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // The scope is inside the if-block
  var b = 1; // The scope is inside the function

  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1


/*
Non-standard let extensions
The let block and let expression syntax is non-standard and will be removed in the future. 
Do not use them! 
*/








/*
The const declaration creates a read-only named constant.
This is a new technology, part of the ECMAScript 2015 (ES6) standard .

Syntax
const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];

nameN
Constant name. It can be any legal identifier.

valueN
Value of the constant. It can be any legal expression.

Description:
This declaration creates a constant that can be global or local to the 
function in which it is declared. Constants are block-scoped. The value 
of a constant cannot change through re-assignment, and a constant cannot
be re-declared. An initializer for a constant is required. A constant 
cannot share its name with a function or a variable in the same scope.
*/
// NOTE: Constants can be declared with uppercase or lowercase, but just by convention, we are using uppercase
// define my_fav as a constant and give it the value 7
const MY_FAV = 7;

// this will fail silently in Firefox and Chrome (but does not fail in Safari)
MY_FAV = 20;

// will print 7
console.log("my favorite number is: " + MY_FAV);

// trying to redeclare a constant throws an error 
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will also fail
var MY_FAV = 20; 

// MY_FAV is still 7
console.log("my favorite number is " + MY_FAV);

// Assigning to A const variable is a syntax error
const A = 1; A = 2;

// const requires an initializer
const FOO; // SyntaxError: missing = in const declaration

// const also works on objects
const MY_OBJECT = {"key": "value"};

// Overwriting the object fails as above (in Firefox and Chrome but not in Safari)
MY_OBJECT = {"OTHER_KEY": "value"};

// However, object attributes are not protected,
// so the following statement is executed without problems
MY_OBJECT.key = "otherValue";


























/*
'this' pointer:
The 'this' pointer can point to one of many things depending upon the context:

1. In constructor functions (function calls preceded by new) this points to 
the newly created instance of the constructor.
2. When a function is called as a method of an object (e.g. obj.funct())
then the this pointer inside the function points to the object.
3. You can explicitly set what this points to by using call, apply or bind.
4. If none of the above then the this pointer points to the global object 
by default. In browsers this is the window object.

*/


