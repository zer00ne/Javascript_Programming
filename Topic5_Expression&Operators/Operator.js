/*
1. Assignment operators

An assignment operator assigns a value to its left operand based on the 
value of its right operand. The simple assignment operator is equal (=),
which assigns the value of its right operand to its left operand. That 
is, x = y assigns the value of y to x.
*/

/*
1.1 Destructuring assignment:

The destructuring assignment syntax is a JavaScript expression that makes 
it possible to extract data from arrays or objects using a syntax that 
mirrors the construction of array and object literals.

This is a new technology, part of the ECMAScript 2015 (ES6) standard .

Description
The object and array literal expressions provide an easy way to create
ad hoc packages of data. Once you've created these packages of data, 
you can use them any way you want to. You can even return them from functions.

One particularly useful thing you can do with destructuring assignment
is to read an entire structure in a single statement, although there are 
a number of interesting things you can do with them, as shown in the examples below.

This capability is similar to features present in languages such as Perl and Python.
*/

//Array destructuring
var foo = ["one", "two", "three"];
// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];
// with destructuring
var [one, two, three] = foo;

/*
Assignment without declaration

Destructuring assignment can be made without a declaration in the assignment statement.
*/
var a, b;
[a, b] = [1, 2];


/*
Swapping variables
After executing this code, b is 1 and a is 3. Without destructuring assignment, 
swapping two values requires a temporary variable (or, in some low-level languages,
the XOR-swap trick).
*/
var a = 1;
var b = 3;

[a, b] = [b, a];


/*
Multiple-value returns

Thanks to destructuring assignment, functions can return multiple values. While
it's always been possible to return an array from a function, this provides an
added degree of flexibility.
*/
function f() {
  return [1, 2];
}


/*
As you can see, returning results is done using an array-like notation, with 
all the values to return enclosed in brackets. You can return any number of 
results in this way. In this example, f() returns the values [1, 2] as its output.
*/
var a, b;
[a, b] = f();
console.log("A is " + a + " B is " + b);

/*
The statement [a, b] = f() assigns the results of the function to the variables 
in brackets, in order: a is set to 1 and b is set to 2.

You can also retrieve the return values as an array:
In this case, a is an array containing the values 1 and 2.
*/
var a = f();
console.log("A is " + a);

/*
Ignoring some returned values

You can also ignore return values that you're not interested in:

After running this code, a is 1 and b is 3. The value 2 is ignored. You can 
ignore any (or all) returned values this way. 
*/
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log("A is " + a + " B is " + b);

// For example,
[,,] = f();


/*
When the regular expression exec() method finds a match, it returns an 
array containing first the entire matched portion of the string and then 
the portions of the string that matched each parenthesized group in the
regular expression. Destructuring assignment allows you to pull the parts
out of this array easily, ignoring the full match if it is not needed.
*/
var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // logs "https:"


/*
1.2 Object destructuring

Simple example
*/
var o = {p: 42, q: true};
var {p, q} = o; // horrible syntax

console.log(p); // 42
console.log(q); // true 

// Assign new variable names
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true  



//Function argument defaults

//ES5 version
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});


//ES6 version
function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) 
{
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});


/*
Module (non-ES6) loading
Destructuring can help to load specific subsets of a non-ES6 module like here in the Add-on SDK:
*/
const { Loader, main } = require('toolkit/loader');




//Nested object and array destructuring
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"



//For of iteration and destructuring
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"




/*
Pulling fields from objects passed as function parameter
This pulls the id, displayName and firstName from the user object and prints them.
*/
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = { 
  id: 42, 
  displayName: "jdoe",
  fullName: { 
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"












/*
2. Comparison operators:
JavaScript has both strict and type–converting comparisons. A strict 
comparison (e.g., ===) is only true if the operands are of the same type.
The more commonly used abstract comparison (e.g. ==) converts the operands
to the same Type before making the comparison. For relational abstract 
comparisons (e.g., <=), the operands are first converted to primitives,
then to the same type, before comparison.

Strings are compared based on standard lexicographical ordering, using Unicode values.

Features of comparisons:

  -Two strings are strictly equal when they have the same sequence of 
    characters, same length, and same characters in corresponding positions.
  -Two numbers are strictly equal when they are numerically equal (have 
    the same number value). NaN is not equal to anything, including NaN.
    Positive and negative zeros are equal to one another.
  -Two Boolean operands are strictly equal if both are true or both are false.
  -Two distinct objects are never equal for either strict or abstract comparisons.
  -An expression comparing Objects is only true if the operands reference the same Object.
  -Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.
*/


/*
Equality operators

Equality (==)
The equality operator converts the operands if they are not of the 
same type, then applies strict comparison. If both operands are objects,
then JavaScript compares internal references which are equal when operands 
refer to the same object in memory.
*/
1   ==  1     // true
"1"  ==  1     // true
1   == '1'    // true
0   == false  // true


/*
Inequality (!=)
The inequality operator returns true if the operands are not equal.
If the two operands are not of the same type, JavaScript attempts to 
convert the operands to an appropriate type for the comparison. If 
both operands are objects, then JavaScript compares internal references
which are not equal when operands refer to different objects in memory.
*/
1 !=   2     // true
1 !=  "1"    // false
1 !=  '1'    // false
1 !=  true   // false
0 !=  false  // false


/*
Identity / strict equality (===)
The identity operator returns true if the operands are strictly 
equal (see above) with no type conversion.
*/
3 === 3   // true
3 === '3' // false


/*
Non-identity / strict inequality (!==)
The non-identity operator returns true if the operands are not equal 
and/or not of the same type.
*/
3 !== '3' // true
4 !== 3   // true











/*
3. Relational operators:

Greater than operator (>)
The greater than operator returns true if the left operand is greater 
than the right operand.
*/
4 > 3 // true


/*
Greater than or equal operator (>=)

The greater than or equal operator returns true if the left operand is
greater than or equal to the right operand.
*/
4 >= 3 // true
3 >= 3 // true


/*
Less than operator (<)
The less than operator returns true if the left operand is less than the right operand.
*/
3 < 4 // true

/*
Less than or equal operator (<=)
The less than or equal operator returns true if the left operand is less
than or equal to the right operand.
*/
3 <= 4 // true


/*
Using the Equality Operators

The standard equality operators (== and !=) use the Abstract Equality Comparison
Algorithm to compare two operands. If the operands are of different Types,
it will attempt to convert them to the same Type before making the comparison,
e.g., in the expression 5 == '5', the string on the right is converted to
Number before the comparison is made.

The strict equality operators (=== and !==) use the Strict Equality Comparison
Algorithm and are intended for performing equality comparisons on operands of 
the same Type. If the operands are of different Types, the result is always
false so 5 !== '5'.

Use strict equality operators if the operands must be of a specific Type as
well as value or if the exact Type of the operands is important. Otherwise,
use the standard equality operators, which allow you to compare the
identity of two operands even if they are not of the same Type.

When Type conversion is involved in the comparison (i.e., non–strict 
comparison), JavaScript converts Type String, Number, Boolean, or Object
operands as follows:

  -When comparing a number and a string, the string is converted to a number 
    value. JavaScript attempts to convert the string numeric literal to a Number
    type value. First, a mathematical value is derived from the string numeric 
    literal. Next, this value is rounded to nearest Number type value.
  -If one of the operands is Boolean, the Boolean operand is converted to 1
    if it is true and +0 if it is false.
  -If an object is compared with a number or string, JavaScript attempts to 
    return the default value for the object. Operators attempt to convert the
    object to a primitive value, a String or Number value, using the valueOf 
    and toString methods of the objects. If this attempt to convert the object
    fails, a runtime error is generated.
  -Note that an object is converted into a primitive if, and only if, its
    comparand is a primitive. If both operands are objects, they're compared
    as objects, and the equality test is true only if both refer the same object.

Note: String Objects are Type Object, not String! String objects are rarely 
      used, so the following results might be surprising:
*/
// true as both operands are Type String (i.e. string primitives):
'foo' === 'foo'

var a = new String('foo');
var b = new String('foo');

// false as a and b are Type Object and reference different objects
a == b 

// false as a and b are Type Object and reference different objects
a === b 

// true as a and 'foo' are of different type and, the Object (a) 
// is converted to String 'foo' before comparison
a == 'foo'











/*
4. Arithmetic operators:
Take numerical values (either literals or variables) as their operands 
and return a single numerical value. The standard arithmetic operators 
are addition (+), subtraction (-), multiplication (*), and division (/).
*/

/*
Addition (+)
The addition operator produces the sum of numeric operands or string concatenation.
*/

// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0

// Number + String -> concatenation
5 + "foo" // "5foo"

// String + Boolean -> concatenation
"foo" + false // "foofalse"

// String + String -> concatenation
"foo" + "bar" // "foobar"

/*
Subtraction (-)
The subtraction operator subtracts the two operands, producing their difference.
*/
5 - 3 // 2
3 - 5 // -2
"foo" - 3 // NaN


/*
Division (/)
The division operator produces the quotient of its operands where the 
left operand is the dividend and the right operand is the divisor.
*/
1 / 2      // returns 0.5 in JavaScript
1 / 2      // returns 0 in Java 
// (neither number is explicitly a floating point number)

1.0 / 2.0  // returns 0.5 in both JavaScript and Java

2.0 / 0    // returns Infinity in JavaScript
2.0 / 0.0  // returns Infinity too
2.0 / -0.0 // returns -Infinity in JavaScript


/*
Multiplication (*)
The multiplication operator produces the product of the operands.
*/
2 * 2 // 4
-2 * 2 // -4
Infinity * 0 // NaN
Infinity * Infinity // Infinity
"foo" * 2 // NaN

/*
Remainder (%)
The remainder operator returns the first operand modulo the second operand, 
that is, var1 modulo var2, in the preceding statement, where var1 and var2 
are variables. The modulo function is the integer remainder of dividing var1 by var2.

It does not follow euclidean division.
*/
12 % 5 // 2
-1 % 2 // -1
NaN % 2 // NaN

/*
Increment (++)
The increment operator increments (adds one to) its operand and returns a value.

If used postfix, with operator after operand (for example, x++), then it returns
the value before incrementing.
If used prefix with operator before operand (for example, ++x), then it returns
the value after incrementing.
*/

// Postfix 
var x = 3;
y = x++; // y = 3, x = 4

// Prefix
var a = 2;
b = ++a; // a = 3, b = 3

/*
Decrement (--)
The decrement operator decrements (subtracts one from) its operand and returns a value.

If used postfix (for example, x--), then it returns the value before decrementing.
If used prefix (for example, --x), then it returns the value after decrementing.
*/
// Postfix 
var x = 3;
y = x--; // y = 3, x = 2

// Prefix
var a = 2;
b = --a; // a = 1, b = 1

/*
Unary negation (-)
The unary negation operator precedes its operand and negates it.
*/
var x = 3;
y = -x; // y = -3, x = 3


/*
Unary plus (+)
The unary plus operator precedes its operand and evaluates to its operand
but attempts to converts it into a number, if it isn't already. Although
unary negation (-) also can convert non-numbers, unary plus is the fastest
and preferred way of converting something into a number, because it does 
not perform any other operations on the number. It can convert string 
representations of integers and floats, as well as the non-string values 
true, false, and null. Integers in both decimal and hexadecimal ("0x"-prefixed) 
formats are supported. Negative numbers are supported (though not for hex).
If it cannot parse a particular value, it will evaluate to NaN.
*/
+3     // 3
+"3"   // 3
+true  // 1
+false // 0
+null  // 0










/*
5. Bitwise operators
Bitwise operators treat their operands as a sequence of 32 bits (zeroes and 
ones), rather than as decimal, hexadecimal, or octal numbers. For example, 
the decimal number nine has a binary representation of 1001. Bitwise operators
perform their operations on such binary representations, but they return 
standard JavaScript numerical values.
*/

/*
Signed 32-bit integers
The operands of all bitwise operators are converted to signed 32-bit integers 
in two's complement format. Two's complement format means that a number's 
negative counterpart (e.g. 5 vs. -5) is all the number's bits inverted 
(bitwise NOT of the number, a.k.a. ones' complement of the number) plus one.
For example, the following encodes the integer 314:
*/

00000000000000000000000100111010

//The following encodes ~314, i.e. the ones' complement of 314:
11111111111111111111111011000101

//Finally, the following encodes -314, i.e. the two's complement of 314:
11111111111111111111111011000110

/*
The two's complement guarantees that the left-most bit is 0 when the number 
is positive and 1 when the number is negative. Thus, it is called the sign bit.
*/

//The number 0 is the integer that is composed completely of 0 bits.
0 (base 10) = 00000000000000000000000000000000 (base 2)

//The number -1 is the integer that is composed completely of 1 bits.
-1 (base 10) = 11111111111111111111111111111111 (base 2)

/*
The number -2147483648 (hexadecimal representation: -0x80000000) is the 
integer that is composed completely of 0 bits except the first (left-most) one.
*/
-2147483648 (base 10) = 10000000000000000000000000000000 (base 2)

/*
The number 2147483647 (hexadecimal representation: 0x7fffffff) is the integer 
that is composed completely of 1 bits except the first (left-most) one.
*/
2147483647 (base 10) = 01111111111111111111111111111111 (base 2)

/*
The numbers -2147483648 and 2147483647 are the minimum and the maximum
integers representable through a 32bit signed number.
*/

/*
& (Bitwise AND)
Performs the AND operation on each pair of bits. a AND b yields 1 only 
if both a and b are 1. 
*/
9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)

/*
(Bitwise OR)
Performs the OR operation on each pair of bits. a OR b yields 1 if either a or b is 1. 
*/
9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)


/*
^ (Bitwise XOR)
Performs the XOR operation on each pair of bits. a XOR b yields 1 if a and b are different. 
*/
9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)

/*
~ (Bitwise NOT)
Performs the NOT operator on each bit. NOT a yields the inverted value 
(a.k.a. one's complement) of a.

Bitwise NOTing any number x yields -(x + 1). For example, ~5 yields -6.
*/
9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)


//Example with indexOf:
var str = 'rawr';
var searchFor = 'a';

// this is alternative way of typing if (-1*str.indexOf('a') <= -1)
if (~str.indexOf(searchFor)) {
  // searchFor is in the string
} else {
  // searchFor is not in the string
}

// here are the values returned by (~str.indexOf(searchFor))
// r == -1
// a == -2
// w == -3


/*
Bitwise shift operators:

The bitwise shift operators take two operands: the first is a quantity 
to be shifted, and the second specifies the number of bit positions by
which the first operand is to be shifted. The direction of the shift 
operation is controlled by the operator used.

Shift operators convert their operands to 32-bit integers in big-endian 
order and return a result of the same type as the left operand. The 
right operand should be less than 32, but if not only the low five
bits will be used.
*/

/*
<< (Left shift)

This operator shifts the first operand the specified number of bits to
the left. Excess bits shifted off to the left are discarded. Zero bits
are shifted in from the right.

For example, 9 << 2 yields 36:
*/
9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)


/*
>> (Sign-propagating right shift)

This operator shifts the first operand the specified number of bits
to the right. Excess bits shifted off to the right are discarded.
Copies of the leftmost bit are shifted in from the left. Since the new
leftmost bit has the same value as the previous leftmost bit, the sign
bit (the leftmost bit) does not change. Hence the name "sign-propagating".

For example, 9 >> 2 yields 2:
*/
9 (base 10): 00000000000000000000000000001001 (base 2)
                  --------------------------------
9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)

//Likewise, -9 >> 2 yields -3, because the sign is preserved:

-9 (base 10): 11111111111111111111111111110111 (base 2)
                   --------------------------------
-9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)


/*
>>> (Zero-fill right shift)

This operator shifts the first operand the specified number of bits to 
the right. Excess bits shifted off to the right are discarded. Zero bits
are shifted in from the left. The sign bit becomes 0, so the result is
always non-negative.

For non-negative numbers, zero-fill right shift and sign-propagating 
ight shift yield the same result. For example, 9 >>> 2 yields 2, the 
same as 9 >> 2:
*/
9 (base 10): 00000000000000000000000000001001 (base 2)
                   --------------------------------
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)

/*
However, this is not the case for negative numbers. For example, 
-9 >>> 2 yields 1073741821, which is different than -9 >> 2 (which yields -3):
*/
-9 (base 10): 11111111111111111111111111110111 (base 2)
                    --------------------------------
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)

/*
Flags and bitmasks

The bitwise logical operators are often used to create, manipulate, and read
sequences of flags, which are like binary variables. Variables could be used
instead of these sequences, but binary flags take much less memory (by a factor of 32).

Suppose there are 4 flags:

flag A: we have an ant problem
flag B: we own a bat
flag C: we own a cat
flag D: we own a duck

These flags are represented by a sequence of bits: DCBA. When a flag is set,
it has a value of 1. When a flag is cleared, it has a value of 0. Suppose a
variable flags has the binary value 0101:
*/
var flags = 5;   // binary 0101

/*
This value indicates:

flag A is true (we have an ant problem);
flag B is false (we don't own a bat);
flag C is true (we own a cat);
flag D is false (we don't own a duck);

Since bitwise operators are 32-bit, 0101 is actually
00000000000000000000000000000101, but the preceding zeroes can be neglected
since they contain no meaningful information.

A bitmask is a sequence of bits that can manipulate and/or read flags. 
Typically, a "primitive" bitmask for each flag is defined:
*/

var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000

/*
New bitmasks can be created by using the bitwise logical operators 
on these primitive bitmasks. For example, the bitmask 1011 can be
created by ORing FLAG_A, FLAG_B, and FLAG_D:
*/

var mask = FLAG_A | FLAG_B | FLAG_D; // 0001 | 0010 | 1000 => 1011

/*
Individual flag values can be extracted by ANDing them with a bitmask,
where each bit with the value of one will "extract" the corresponding
flag. The bitmask masks out the non-relevant flags by ANDing with
zeroes (hence the term "bitmask"). For example, the bitmask 0101 
can be used to see if flag C is set:
*/

// if we own a cat
if (flags & FLAG_C) { // 0101 & 0100 => 0100 => true
   // do stuff
}

/*
A bitmask with multiple set flags acts like an "either/or". For 
example, the following two are equivalent:
*/
// if we own a bat or we own a cat
// (0101 & 0010) || (0101 & 0100) => 0000 || 0100 => true
if ((flags & FLAG_B) || (flags & FLAG_C)) {
   // do stuff
}

// if we own a bat or cat
var mask = FLAG_B | FLAG_C; // 0010 | 0100 => 0110
if (flags & mask) { // 0101 & 0110 => 0100 => true
   // do stuff
}

/*
Flags can be set by ORing them with a bitmask, where each bit with 
the value one will set the corresponding flag, if that flag isn't 
already set. For example, the bitmask 1100 can be used to set flags C and D:
*/
// yes, we own a cat and a duck
var mask = FLAG_C | FLAG_D; // 0100 | 1000 => 1100
flags |= mask;   // 0101 | 1100 => 1101

/*
Flags can be cleared by ANDing them with a bitmask, where each bit 
with the value zero will clear the corresponding flag, if it isn't 
already cleared. This bitmask can be created by NOTing primitive 
bitmasks. For example, the bitmask 1010 can be used to clear flags A and C:
*/
// no, we don't have an ant problem or own a cat
var mask = ~(FLAG_A | FLAG_C); // ~0101 => 1010
flags &= mask;   // 1101 & 1010 => 1000


//The mask could also have been created with ~FLAG_A & ~FLAG_C (De Morgan's law):
// no, we don't have an ant problem, and we don't own a cat
var mask = ~FLAG_A & ~FLAG_C;
flags &= mask;   // 1101 & 1010 => 1000


/*
Flags can be toggled by XORing them with a bitmask, where each bit 
with the value one will toggle the corresponding flag. For example, 
the bitmask 0110 can be used to toggle flags B and C:
*/
// if we didn't have a bat, we have one now, 
// and if we did have one, bye-bye bat
// same thing for cats
var mask = FLAG_B | FLAG_C;
flags = flags ^ mask;   // 1100 ^ 0110 => 1010



//Finally, the flags can all be flipped with the NOT operator:
// entering parallel universe...
flags = ~flags;    // ~1010 => 0101



/*
Conversion snippets
Convert a binary String to a decimal Number:
*/
var sBinString = "1011";
var nMyNumber = parseInt(sBinString, 2);
alert(nMyNumber); // prints 11, i.e. 1011


//Convert a decimal Number to a binary String:
var nMyNumber = 11;
var sBinString = nMyNumber.toString(2);
alert(sBinString); // prints 1011, i.e. 11


/*
Automatize the creation of a mask
If you have to create many masks from some Boolean values, you can automatize the process:
*/

function createMask () {
  var nMask = 0, nFlag = 0, nLen = arguments.length > 32 ? 32 : arguments.length;
  for (nFlag; nFlag < nLen; nMask |= arguments[nFlag] << nFlag++);
  return nMask;
}
var mask1 = createMask(true, true, false, true); // 11, i.e.: 1011
var mask2 = createMask(false, false, true); // 4, i.e.: 0100
var mask3 = createMask(true); // 1, i.e.: 0001
// etc.

alert(mask1); // prints 11, i.e.: 1011




/*
Reverse algorithm: an array of booleans from a mask
If you want to create an Array of Booleans from a mask you can use this code:
*/
function arrayFromMask (nMask) {
  // nMask must be between -2147483648 and 2147483647
  if (nMask > 0x7fffffff || nMask < -0x80000000) { 
    throw new TypeError("arrayFromMask - out of range"); 
  }
  for (var nShifted = nMask, aFromMask = []; nShifted; 
       aFromMask.push(Boolean(nShifted & 1)), nShifted >>>= 1);
  return aFromMask;
}

var array1 = arrayFromMask(11);
var array2 = arrayFromMask(4);
var array3 = arrayFromMask(1);

alert("[" + array1.join(", ") + "]");
// prints "[true, true, false, true]", i.e.: 11, i.e.: 1011



//You can test both algorithms at the same time…
var nTest = 19; // our custom mask
var nResult = createMask.apply(this, arrayFromMask(nTest));

alert(nResult); // 19



/*
For didactic purpose only (since there is the Number.toString(2) method),
we show how it is possible to modify the arrayFromMask algorithm in order
to create a String containing the binary representation of a Number, 
rather than an Array of Booleans:
*/
function createBinaryString (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}

var string1 = createBinaryString(11);
var string2 = createBinaryString(4);
var string3 = createBinaryString(1);

alert(string1);
// prints 00000000000000000000000000001011, i.e. 11









/*
6. Comma operator:

The comma operator evaluates each of its operands (from left to right) and 
returns the value of the last operand.

Description
You can use the comma operator when you want to include multiple expressions
in a location that requires a single expression. The most common usage of
this operator is to supply multiple parameters in a for loop.
*/

/*
Example
If a is a 2-dimensional array with 10 elements on a side, the following 
code uses the comma operator to increment two variables at once. Note 
that the comma in the var statement is not the comma operator, because 
it doesn't exist within an expression. Rather, it is a special character
in var statements to combine multiple of them into one. Practically, 
that comma behaves almost the same as the comma operator, though. The 
code prints the values of the diagonal elements in the array:
*/
for (var i = 0, j = 9; i <= 9; i++, j--)
  document.writeln("a[" + i + "][" + j + "] = " + a[i][j]);

/*
Processing and then returning

Another example that one could make with comma operator is processing
before returning. As stated, only the last element will be returned 
but all others are going to be evaluated as well. So, one could do:
*/
function myFunc () {
  var x = 0;

  return (x += 1, x); // the same as return ++x;
}







/*
7. Conditional (ternary) Operator:

The conditional (ternary) operator is the only JavaScript operator 
that takes three operands. This operator is frequently used as a 
shortcut for the if statement.

Parameters

condition
An expression that evaluates to true or false.

expr1, expr2
Expressions with values of any type.

Description
If condition is true, the operator returns the value of expr1; 
otherwise, it returns the value of expr2. For example, to display
a different message based on the value of the isMember variable, 
you could use this statement:
*/
"The fee is " + (isMember ? "$2.00" : "$10.00")

//You can also assign variables depending on a ternary result:
var elvisLives = Math.PI > 4 ? "Yep" : "Nope";

/*
Multiple ternary evaluations are also possible (note: the conditional 
operator is right associative):
*/
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";
  
console.log( access ); // logs "Access granted"


/*
You can also use ternary evaluations in free space in order
to do different operations:
*/
var stop = false, age = 16;
age > 18 ? location.assign("continue.html") : stoYou can also do more than one operation during the assignation of a value. In this case, the last comma-separated value of the parenthesis will be the value to be assigned.p = true;


/*
You can also do more than one single operation per case, separating them with a comma:
*/
var stop = false, age = 23;

age > 18 ? (
    alert("OK, you can go."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Sorry, you are much too young!")
);


/*
You can also do more than one operation during the assignation of a 
value. In this case, the last comma-separated value of the parenthesis
will be the value to be assigned.
*/
var age = 16;

var url = age > 18 ? (
    alert("OK, you can go."), 
    // alert returns "undefined", but it will be ignored because
    // isn't the last comma-separated value of the parenthesis
    "continue.html" // the value to be assigned if age > 18
) : (
    alert("You are much too young!"),
    alert("Sorry :-("),
    // etc. etc.
    "stop.html" // the value to be assigned if !(age > 18)
);

location.assign(url); // "stop.html"










/*
8. Unary operators
A unary operation is operation with only one operand.

delete
The delete operator deletes an object, an object's property, or an element 
at a specified index in an array. The syntax is:

delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // legal only within a with statement
*/


/*
where objectName is the name of an object, property is an existing property,
and index is an integer representing the location of an element in an array.

The fourth form is legal only within a with statement, to delete a property 
from an object.

You can use the delete operator to delete variables declared implicitly but
not those declared with the var statement.

If the delete operator succeeds, it sets the property or element to undefined.
The delete operator returns true if the operation is possible; it returns 
false if the operation is not possible.
*/
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)


/*
Deleting array elements
When you delete an array element, the array length is not affected.
For example, if you delete a[3], a[4] is still a[4] and a[3] is undefined.

When the delete operator removes an array element, that element is no
longer in the array. In the following example, trees[3] is removed with 
delete. However, trees[3] is still addressable and returns undefined.
*/
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
  // this does not get executed
}

/*
If you want an array element to exist but have an undefined value,
use the undefined keyword instead of the delete operator. In the 
following example, trees[3] is assigned the value undefined, but 
the array element still exists:
*/
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
if (3 in trees) {
  // this gets executed
}


/*
typeof

The typeof operator is used in either of the following ways:

typeof operand
typeof (operand)
The typeof operator returns a string indicating the type of the 
unevaluated operand. operand is the string, variable, keyword, 
or object for which the type is to be returned.

The parentheses are optional.

Suppose you define the following variables:
*/
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();


//The typeof operator returns the following results for these variables:
typeof myFun;     // returns "function"
typeof shape;     // returns "string"
typeof size;      // returns "number"
typeof today;     // returns "object"
typeof dontExist; // returns "undefined"

//For the keywords true and null, the typeof operator returns the following results:
typeof true; // returns "boolean"
typeof null; // returns "object"

//For a number or string, the typeof operator returns the following results:
typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"

//For property values, the typeof operator returns the type of value the property contains:
typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"

//For methods and functions, the typeof operator returns results as follows:
typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"

//For predefined objects, the typeof operator returns results as follows:
typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"


/*
void

The void operator is used in either of the following ways:

void (expression)
void expression
The void operator specifies an expression to be evaluated without 
returning a value. expression is a JavaScript expression to evaluate. 
The parentheses surrounding the expression are optional, but it is
good style to use them.

You can use the void operator to specify an expression as a hypertext 
link. The expression is evaluated but is not loaded in place of the current document.

The following code creates a hypertext link that does nothing when
the user clicks it. When the user clicks the link, void(0) evaluates
to undefined, which has no effect in JavaScript.
*/
<a href="javascript:void(0)">Click here to do nothing</a>

//The following code creates a hypertext link that submits a form when the user clicks it.

<a href="javascript:void(document.form.submit())">
Click here to submit</a>












/*
9. Relational operators
A relational operator compares its operands and returns a Boolean value based on
whether the comparison is true.

in
The in operator returns true if the specified property is in the specified object. 

The syntax is:
propNameOrNumber in objectName
where propNameOrNumber is a string or numeric expression representing a property 
name or array index, and objectName is the name of an object.

The following examples show some uses of the in operator.
*/
// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
"bay" in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math;          // returns true
var myString = new String("coral");
"length" in myString;  // returns true

// Custom objects
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar;  // returns true
"model" in mycar; // returns true


/*
instanceof

The instanceof operator returns true if the specified object is of the 
specified object type. The syntax is:

objectName instanceof objectType
where objectName is the name of the object to compare to objectType, 
and objectType is an object type, such as Date or Array.

Use instanceof when you need to confirm the type of an object at runtime.
For example, when catching exceptions, you can branch to different 
exception-handling code depending on the type of exception thrown.

For example, the following code uses instanceof to determine whether 
theDay is a Date object. Because theDay is a Date object, the 
statements in the if statement execute.
*/
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}













/*
10. Logical operators
Logical operators are typically used with Boolean (logical) values. 
When they are, they return a Boolean value. However, the && and || 
operators actually return the value of one of the specified operands,
so if these operators are used with non-Boolean values, they may 
return a non-Boolean value.

Short-Circuit Evaluation

As logical expressions are evaluated left to right, they are tested
for possible "short-circuit" evaluation using the following rules:

false && (anything) is short-circuit evaluated to false.
true || (anything) is short-circuit evaluated to true.

The rules of logic guarantee that these evaluations are always 
correct. Note that the anything part of the above expressions is not
evaluated, so any side effects of doing so do not take effect. Also 
note that the anything part of the above expression is any single 
logical expression (as indicated by the parentheses).
*/

//Logical AND
a1 = true  && true      // t && t returns true
a2 = true  && false     // t && f returns false
a3 = false && true      // f && t returns false
a4 = false && (3 == 4)  // f && f returns false
a5 = "Cat" && "Dog"     // t && t returns "Dog"
a6 = false && "Cat"     // f && t returns false
a7 = "Cat" && false     // t && f returns false

//Logical OR
o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = "Cat" || "Dog"      // t || t returns "Cat"
o6 = false || "Cat"      // f || t returns "Cat"
o7 = "Cat" || false      // t || f returns "Cat"

//Logical NOT (!)
n1 = !true              // !t returns false
n2 = !false             // !f returns true
n3 = !"Cat"             // !t returns false














/*
11. String operators

In addition to the comparison operators, which can be used 
on string values, the concatenation operator (+) concatenates 
two string values together, returning another string that is 
the union of the two operand strings.
*/

console.log("my " + "string"); // console logs the string "my string".

//The shorthand assignment operator += can also be used to concatenate strings.
var mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.

