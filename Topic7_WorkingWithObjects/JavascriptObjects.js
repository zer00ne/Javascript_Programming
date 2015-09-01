
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








/*
`new X` Vs `Object.create(X)`
===========================

Considering `Employee` constructor, Difference between `new Employee` and `Object.create(Employee)`:

1) `new` is called only on Function constructors.

2) `Object.create(Employee)` is equivalent to `{"__proto__" : Employee}`.

3) `new Employee()` is equivalent to: 
      a) `var Y = {"__proto__" : Employee.prototype};`
      b) Invoke `Employee.apply(Y, arguments);` // `Employee` constructor does not have `arguments`
      c) Y;   // is the object created after calling `new X` that has values set for members `name` and `dept`.

*/

function Employee() {
  this.name = "";
  this.dept = "general";
}








/*
Why is it necessary to set the prototype constructor?
====================================================



*/