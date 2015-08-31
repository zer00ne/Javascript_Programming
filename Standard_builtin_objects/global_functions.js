/*
The eval() method evaluates JavaScript code represented as a string.

Syntax
eval(string)


Parameters
string
A string representing a JavaScript expression, statement, or sequence of statements. 
The expression can include variables and properties of existing objects.

Description
eval() is a function property of the global object.

The argument of the eval() function is a string. If the string represents an expression, 
eval() evaluates the expression. If the argument represents one or more JavaScript 
statements, eval() evaluates the statements. Do not call eval() to evaluate an
arithmetic expression; JavaScript evaluates arithmetic expressions automatically.

If you construct an arithmetic expression as a string, you can use eval() to 
evaluate it at a later time. For example, suppose you have a variable x. You 
can postpone evaluation of an expression involving x by assigning the string 
value of the expression, say "3 * x + 2", to a variable, and then calling 
eval() at a later point in your script.

If the argument of eval() is not a string, eval() returns the argument 
unchanged. In the following example, the String constructor is specified, 
and eval() returns a String object rather than evaluating the string.

*/

eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2");             // returns 4

/*
If you use the eval function indirectly, by invoking it via a reference 
other than eval, as of ECMAScript 5 it works at global scope rather than
local scope; this means, for instance, that function declarations create
global functions, and that the code being evaluated doesn't have access
to local variables within the scope where it's being called.
*/

function test() {
  var x = 2, y = 4;
  console.log(eval("x + y"));  // Direct call, uses local scope, result is 6
  var geval = eval;
  console.log(geval("x + y")); // Indirect call, uses global scope, throws ReferenceError because `x` is undefined
}




/*
Using eval

In the following code, both of the statements containing eval() return 42. 
The first evaluates the string "x + y + 1"; the second evaluates the string "42".
*/
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42
eval(z);           // returns 42



/*
Using eval to evaluate a string of JavaScript statements

The following example uses eval() to evaluate the string str. 
This string consists of JavaScript statements that open an alert dialog box 
and assign z a value of 42 if x is five, and assigns 0 to z otherwise. When
the second statement is executed, eval() will cause these statements to be 
performed, and it will also evaluate the set of statements and return the 
value that is assigned to z.
*/
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0; ";

console.log("z is ", eval(str));

