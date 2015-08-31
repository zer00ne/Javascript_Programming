/*
1) 
Data types
	The latest ECMAScript standard defines seven data types:

	Six data types that are primitives:
		Boolean
		Null
		Undefined
		Number
		String
		Symbol (new in ECMAScript 6)
	and Object


2) Objects are aggregations of properties. A property can reference an object or a primitive. A primitive 
(primitive value, primitive data type) is data that is not an object and has no proeprties.

3) Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

4) All primitives are immutable (cannot be changed).

Note: The global NaN property is a value representing Not-A-Number. window[NaN]
Note: Infinity is a property of the global object, i.e. it is a variable in global scope.
*/



/*
5) 
The Undefined Type:
The Undefined type has exactly one value, called undefined. Any variable that has not been assigned a value has the value undefined.

A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable
that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.

You can use undefined to determine whether a variable has a value. In the following code, the variable input is not assigned a value,
and the if statement evaluates to true.
*/
var foo;  // foo's value is 'Undefined' primitive type, where the variable's value is Javascript's primitive value 'undefined'

var input;
if(input === undefined){
  //doThis();
} else {
  //doThat();
}

/*
The undefined value behaves as false when used in a boolean context. For example, the following code executes the function
myFunction because the myArray element is undefined
*/
var myArray = [];
if(!myArray[0]){
	//myFunction();
}

/*
The undefined value converts to NaN when used in numeric context.
*/
var a;
a + 2   //NaN

/*
undefined is a property of the global object, i.e. it is a variable in global scope. The initial value of undefined 
is the primitive value undefined.

window['undefined'] = undefined;
Idea is that, on LHS, undefined is variable, on RHS, undefined is the value of Undefined type.

Yes, Since undefined is not a reserved word, it can be used as an identifier (variable name) in any scope other 
than the global scope.
*/

/*







6)
The Null Type:
The Null type has exactly one value, called null.

The value null is a literal (not a property of the global object like undefined can be). In APIs, null is 
often retrieved in place where an object can be expected but no object is relevant.

*/

var foo = null; // foo's value is 'Null' primitive type, where the variable's value is Javascript's primitive value 'null'.


/*








7)
The Boolean Type:
The Boolean type represents a logical entity having two values, called true and false.
*/
var flip = true;

/*







8)
The string primitive type

The string primitive type is the set of all finite ordered sequences of zero or more 16-bit unsigned integer values (“elements”).
When a String contains actual textual data, each element is considered to be a single UTF-16 code unit.

AutoBoxing behaviour:
String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context
(i.e., without using the new keyword) are primitive strings. JavaScript automatically converts primitives to String objects,
so that it's possible to use String object methods for primitive strings. In contexts where a method is to be invoked on 
a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the
method or perform the property lookup.
*/



/*
Hexadecimal escape sequence:
These are called hexadecimal escape sequences. They consist of two hexadecimal digits that refer to the matching code point.
For example, \x41 represents U+0041 LATIN CAPITAL LETTER A. These escape sequences can be used for code points in the range
from U+0000 to U+00FF code points.
*/
var str1 = '\x41\x42\x43';  // 'ABC'
var str2 = '\x61\x62\x63';  // 'abc'

/*
Unicode escape sequence:
These are called Unicode escape sequences. They consist of exactly 4 hexadecimal digits that represent a code point.
For example, \u2661 represents U+2661 WHITE HEART SUIT. These escape sequences can be used for code points in the
range from U+0000 to U+FFFF, i.e. the entire Basic Multilingual Plane.
*/
var str3 = '\u0041\u0042\u0043';   // 'ABC'
var str4 = 'I \u2661 JavaScript!';  // 'I ♡ JavaScript!'

/*
But what about all the other planes — the astral planes? We need more than 4 hexadecimal digits to represent their
code points… So how can we escape them?
*/

/*
Unicode code point escapes:
Between the braces you can use up to six hexadecimal digits, which is enough to represent all Unicode code points.
So, by using this type of escape sequence, you can easily escape any Unicode symbol based on its code point.
*/
var str5 = '\u{41}\u{42}\u{43}';
var str6 = '\u{1F4A9}';

/*
For backwards compatibility with ECMAScript 5 and older environments, the unfortunate solution is to use surrogate pairs:
Internally, JavaScript represents astral symbols as surrogate pairs, and it exposes the separate surrogate halves as
separate “characters”. If you represent the symbols using nothing but ECMAScript 5-compatible escape sequences, 
you’ll see that two escapes are needed for each astral symbol. This is confusing, because humans generally think in terms of Unicode symbols
*/
var str7 = '\uD83D\uDCA9';

/*
String literals
A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be 
delimited by quotation marks of the same type; that is, either both single quotation marks or both double quotation
marks. The following are examples of string literals:
*/
"foo"
'bar'
"1234"
"one line \n another line"
"John's cat"

/*
You can call any of the methods of the String object on a string literal value—JavaScript automatically converts
the string literal to a temporary String object, calls the method, then discards the temporary String object.
You can also use the String.length property with a string literal:
*/
console.log("John's cat".length) // In this case, 10.

/*
The following table lists the special characters that you can use in JavaScript strings.

Table - JavaScript special characters
Character	   Meaning
-----------------------
	\0		Null Byte
	\b		Backspace
	\f		Form feed
	\n		New line
	\r		Carriage return
	\t		Tab
	\v		Vertical tab
	\'		Apostrophe or single quote
	\"		Double quote
	\\		Backslash character
	\XXX	The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377. For example, \251 is the octal sequence for the copyright symbol.
	\xXX	The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol.
	\uXXXX	The Unicode character specified by the four hexadecimal digits XXXX. For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.
*/
var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service."; // He read "The Cremation of Sam McGee" by R.W. Service.
var home = "c:\\temp"; //    c:\temp

/*
You can also escape line breaks by preceding them with backslash(\ENTERBUTTON). 
The backslash and line break are both removed from the value of the string.
*/
var str = "this string \
is broken \
across multiple\
lines."
console.log(str);   // this string is broken across multiplelines.


/*
Although JavaScript does not have "heredoc" syntax, you can get close by adding a linebreak escape and an escaped 
linebreak at the end of each line.
The backslash and line break are both removed from the value of the string.
*/
var poem = 
"Roses are red,\n\
Violets are blue.\n\
I'm schizophrenic,\n\
And so am I."
console.log(poem);










/*
9)
Number primitive type
*/
/*
Decimal literal:
Note that decimal literals can start with a zero (0) followed by another decimal digit, but If 
the next digit after the leading 0 is smaller than 8, the number gets parsed as an octal number. 
*/
var a = 1234;
var b = 0888;   // parsed as decimal literal

/*
Octal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O"
(0o or 0O). Because this syntax is new in ECMAScript 6, see the browser compatibility table
*/
var c = 0o777;   // parsed as octal literal
var d = -0o77;   // parsed as octal literal

/*
Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" 
(0b or 0B). Because this syntax is new in ECMAScript 6, see the browser compatibility table
*/
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648  - Binary literal
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040  - Binary literal
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607	  - Binary literal

/*
Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X). 
Hexadecimal integers can include digits (0-9) and the letters a-f and A-F.
*/
var y = 0XA;
var z = -0xF1A7;
var w = 0xaf;

/*
Floating point literal
[(+|-)][digits][.digits][(E|e)[(+|-)]digits]
*/
var flt1 = .3333333333333333333;
var flt2 = -.283185307179586;










/*
10)
Object type
A JavaScript object is a mapping between keys and values. Keys are strings and values can be anything.

This makes objects a natural fit for hashmaps.
Functions are regular objects with the additional capability of being callable.

In JavaScript, objects can be seen as a collection of properties. 

With the object literal syntax, a limited set of properties are initialized; then properties can be
added and removed. Property values can be values of any type, including other objects, which enables
building complex data structures. Properties are identified using key values. A key value is either
a String or a Symbol value.
*/

/*
Object literal
An object literal is a list of zero or more pairs of property names and associated values of an object,
enclosed in curly braces ({}). You should not use an object literal at the beginning of a statement. 
This will lead to an error or not behave as you expect, because the { will be interpreted as the 
beginning of a block.

The following is an example of an object literal. The first element of the car object defines a
property, myCar, and assigns to it a new string, "Saturn"; the second element, the getCar property,
is immediately assigned the result of invoking the function (CarTypes("Honda")); the third element,
the special property, uses an existing variable (Sales).
*/
var Sales = "Toyota";

function CarTypes(name) {
  if (name == "Honda") {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota

/*
 Key being numeric literals as property names a bit confusing.
 For example, if you were to use the number .12e3 as an (unquoted) property name, it would be coerced
 into a string first, and the actual object key would become '120'.
*/
var object = {
  .12e3: 'wut'
};

object[.12e3]; // 'wut'
object['.12e3']; // undefined
object['120']; // 'wut

object = {
  12e34: 'heh'
};
object[12e34]; // 'heh'
object['12e34']; // undefined
object[1.2e35]; // 'heh'
object['1.2e35']; // undefined
object[1.2e+35]; // 'heh'
object['1.2e+35']; // 'heh'

/*
While you can easily check the string value of any number — String(number) or (number).toString() — 
it’s definitely simpler to just stick to string literals or identifier names for property names.

Object property names can be any string, including the empty string. If the property name would 
not be a valid JavaScript identifier, it must be enclosed in quotes. Property names that would 
not be valid identifiers also cannot be accessed as a dot (.) property, but can be accessed 
and set with the array-like notation("[]").

JSON only allows string literals that are quoted in double quotes (") as property names.
*/
var object = {
  // `abc` is a valid identifier; no quotes are needed
  abc: 1,
  // `123` is a numeric literal; no quotes are needed
  123: 2,
  // `012` is an octal literal with value `10` and thus isn’t allowed in strict mode; but if you insist on using it, quotes aren’t needed
  012: 3,
  // `π` is a valid identifier; no quotes are needed
  π: Math.PI,
  // `var` is a valid identifier name (although it’s a reserved word); no quotes are needed
  var: 4,
  // `foo bar` is not a valid identifier name; quotes are required
  'foo bar': 5,
  // `foo-bar` is not a valid identifier name; quotes are required
  'foo-bar': 6,
  // the empty string is not a valid identifier name; quotes are required
  '': 7
};

var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}
console.log(unusualPropertyNames."");   // SyntaxError: Unexpected string
console.log(unusualPropertyNames[""]);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames["!"]); // Bang!











/*
Symbol type:
A symbol is a unique and immutable data type and may be used as an identifier 
for object properties. The symbol object is an implicit object wrapper for 
the symbol primitive data type.

Syntax:
Symbol([description])

Parameters
description Optional
Optional, string. A description of the symbol which can be used for debugging
but not to access the symbol itself.
*/

/*
To create a new primitive symbol, you simply write Symbol() with an optional 
string as its description:
*/
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

/*
The above code creates three new symbols. Note that Symbol("foo") does not 
coerce the string "foo" into a symbol. It creates a new symbol each time:
*/
Symbol("foo") === Symbol("foo"); // false

//The following syntax with the new operator will throw a TypeError:
var sym = new Symbol(); // TypeError

/*
This prevents authors from creating an explicit Symbol wrapper object instead
of a new symbol value. Creating an explicit wrapper object around primitive 
data types is no longer supported starting with ECMAScript 6. However,
existing primitive wrapper objects like new Boolean, new String and new 
Number can still be created for legacy reasons.
*/


/*
And if you really want to create a Symbol wrapper object, you can use
Object() function:
*/
var sym = Symbol("foo");
typeof sym;     // "symbol" 
var symObj = Object(sym);
typeof symObj;  // "object"


/*
Shared symbols in the global symbol registry
The above syntax using the Symbol() function will not create a global symbol 
that is available in your whole codebase. To create symbols available across 
files and even across realms (each of which has its own global scope), use 
the methods Symbol.for() and Symbol.keyFor() to set and retrieve symbols 
from the global symbol registry.

What is global symbol registry?
It's a registry (think: dictionary) for symbols that you can access via a 
string key. And "global" does in this case mean even more global than a
global scope, the global symbol registry does span all realms of your 
engine. In a browser, the web page, an iframe, and web worker would all
have their own realm with own global objects, but they could share symbols
via this global registry.

*/
//And this sharing is exactly the purpose. If you'd otherwise put

var sym1 = Symbol("shared");

var sym2 = Symbol("shared");
//in two places, then sym1 !== sym2. If you've got a shared object, using 
//the symbols as property keys would create two different properties. If however you do

var sym1 = Symbol.for("shared");

var sym2 = Symbol.for("shared");
//then sym1 === sym2 and when you use it you'll always get the same property.


















/*
Automatic type conversion:
JavaScript goes out of its way to accept almost any program you give it, even 
programs that do odd things. This is nicely demonstrated by the following expressions:
*/
console.log (8 * null )
// ! 0
console.log ("5" - 1)
// ! 4
console.log ("5" + 1)
// ! 51
console.log (" five " * 2)
// ! NaN
console.log ( false == 0)
// ! true

/*
When an operator is applied to the “wrong” type of value, JavaScript will
quietly convert that value to the type it wants, using a set of rules that
often aren’t what you want or expect. This is called type coercion. So the
null in the first expression becomes 0, and the "5" in the second expression
becomes 5 (from string to number). Yet in the third expression, + tries
string concatenation before numeric addition, so the 1 is converted to "1"
(from number to string).
When something that doesn’t map to a number in an obvious way
(such as "five" or undefined) is converted to a number, the value NaN is
produced. Further arithmetic operations on NaN keep producing NaN, so
if you find yourself getting one of those in an unexpected place, look for
accidental type conversions.
*/