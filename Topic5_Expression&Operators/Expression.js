/*
1. Expressions
An expression is any valid unit of code that resolves to a value.

Conceptually, there are two types of expressions: those that 
assign a value to a variable and those that simply have a value.

The expression x = 7 is an example of the first type. This 
expression uses the = operator to assign the value seven to the 
variable x. The expression itself evaluates to seven.

The code 3 + 4 is an example of the second expression type. 
This expression uses the + operator to add three and four
together without assigning the result, seven, to a variable.

JavaScript has the following expression categories:

Arithmetic: evaluates to a number, for example 3.14159.
 (Generally uses arithmetic operators.)
String: evaluates to a character string, for example, "Fred" 
 or "234". (Generally uses string operators.)
Logical: evaluates to true or false. (Often involves logical operators.)
Primary expressions: Basic keywords and general expressions in JavaScript.
Left-hand-side expressions: Left values are the destination of an assignment.


1.1 Primary expressions
Basic keywords and general expressions in JavaScript.

this

Use the this keyword to refer to the current object. In general, 
this refers to the calling object in a method. Use this either 
with the dot or the bracket notation:

this["propertyName"]
this.propertyName

Suppose a function called validate validates an object's value 
property, given the object and the high and low values:
*/

/*
Global context
In the global execution context (outside of any function), this 
refers to the global object, whether in strict mode or not.
*/
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37


/*
Function context
Inside a function, the value of this depends on how the function is called.

Simple call
In this case, the value of this is not set by the call. Since the code 
is not in strict mode, the value of this must always be an object so 
it defaults to the global object.
*/
function f1(){
  return this;
}

f1() === window; // global object

/*
In strict mode, the value of this remains at whatever it's set to when
entering the execution context. If it's not defined, it remains undefined.
*/

function f2(){
  "use strict"; // see strict mode
  return this;
}

f2() === undefined;


/*
As an object method

When a function is called as a method of an object, its this is set 
to the object the method is called on.

In the following example, when o.f() is invoked, inside the function
this is bound to the o object.

Note that this behavior is not at all affected by how or where the 
function was defined. In this example, we defined the function 
inline as the f member during the definition of o. 
*/
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37


/*
As shown below, we could have just as easily defined the function 
first and later attached it to o.f. Doing so results in the same behavior:

This demonstrates that it matters only that the function was invoked from 
the f member of o.
*/

var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37

/*
Similarly, the this binding is only affected by the most immediate member
reference. In the following example, when we invoke the function, we 
call it as a method g of the object o.b. This time during execution, this 
inside the function will refer to o.b. The fact that the object is itself 
a member of o has no consequence; the most immediate reference is all that matters.
*/
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // logs 42


/*
this on the object's prototype chain
The same notion holds true for methods defined somewhere on the object's 
prototype chain. If the method is on an object's prototype chain, this 
refers to the object the method was called on, as if the method was on the object.

In this example, the object assigned to the variable p doesn't have its 
own f property, it inherits it from its prototype. But it doesn't matter
that the lookup for f eventually finds a member with that name on o; the 
lookup began as a reference to p.f, so this inside the function takes the
value of the object referred to as p. That is, since f is called as a
method of p, its this refers to p. This is an interesting feature of 
JavaScript's prototype inheritance.
*/
var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5


/*
this with a getter or setter
Again, the same notion holds true when a function is invoked from a getter
or a setter. A function used as getter or setter has its this bound to the
object from which the property is being set or gotten.
*/
function modulus(){
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase(){
    return Math.atan2(this.im, this.re);
  }
};

Object.defineProperty(o, 'modulus', {
    get: modulus, enumerable:true, configurable:true});

console.log(o.phase, o.modulus); // logs -0.78 1.4142


/*
As a constructor

When a function is used as a constructor (with the new keyword), 
its this is bound to the new object being constructed.

Note: while the default for a constructor is to return the object 
referenced by this, it can instead return some other object (if the 
return value isn't an object, then the this object is returned).
*/
/*
 * Constructors work like this:
 *
 * function MyConstructor(){
 *   // Actual function body code goes here.  
 *   // Create properties on |this| as
 *   // desired by assigning to them.  E.g.,
 *   this.fum = "nom";
 *   // et cetera...
 *
 *   // If the function has a return statement that
 *   // returns an object, that object will be the
 *   // result of the |new| expression.  Otherwise,
 *   // the result of the expression is the object
 *   // currently bound to |this|
 *   // (i.e., the common case most usually seen).
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38


/*
As a DOM event handler

When a function is used as an event handler, its this is set to the
element the event fired from (some browsers do not follow this
convention for listeners added dynamically with methods other than addEventListener).
*/

// When called as a listener, turns the related element blue
function bluify(e){
  // Always true
  console.log(this === e.currentTarget); 
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}




/*
In an in–line event handler
When code is called from an in–line handler, its this is set to
the DOM element on which the listener is placed:
*/
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>

//The above alert shows button. Note however that only the outer code has its this set this way:

<button onclick="alert((function(){return this}()));">
  Show inner this
</button>



/*
Comprehensions

Comprehensions are an experimental JavaScript feature, targeted to be
included in a future ECMAScript version. There are two versions of comprehensions:

 [for (x of y) x]
Array comprehensions.

 (for (x of y) y)
Generator comprehensions.

Comprehensions exist in many programming languages and allow you to 
quickly assemble a new array based on an existing one, for example.
*/

[for (i of [ 1, 2, 3 ]) i*i ]; 
// [ 1, 4, 9 ]

var abc = [ "A", "B", "C" ];
[for (letters of abc) letters.toLowerCase()];
// [ "a", "b", "c" ]





/*
Left-hand-side expressions



new
The new operator creates an instance of a user-defined object type 
or of one of the built-in object types that has a constructor function.

Syntax
new constructor[([arguments])]

Parameters

constructor
A function that specifies the type of the object instance.

arguments
A list of values that the constructor will be called with.


*/
