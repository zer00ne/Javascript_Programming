
/*
https://www.youtube.com/watch?v=PMfcsYzj-9M

One can think of an object as an associative array (a.k.a. map, dictionary, 
hash, lookup table). The keys in this array are the names of the object's 
properties. It's typical when speaking of an object's properties to make
a distinction between properties and methods. However, the property/method
distinction is little more than a convention. A method is simply a property 
that can be called, for example if it has a reference to a Function instance as its value.

There are two ways to access properties: dot notation and bracket notation.

*/

/*
Property names

Property names must be strings. This means that non-string objects cannot be 
used as keys in the object. Any non-string object, including a number, is 
typecasted into a string via the toString method.

This outputs "value", since 1 is type-casted into '1'.
*/
var object = {};
object['1'] = 'value';
console.log(object[1]);



/*
Objecta are stored as reference
*/
var person = {name: "Kobe"};
var anotherPerson = person;

person.name = "Bryant";

console.log(anotherPerson.name); // Bryant
console.log(person.name); // Bryant


