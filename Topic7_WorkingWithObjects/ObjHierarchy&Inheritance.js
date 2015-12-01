/*
JavaScript is an object-based language based on prototypes, rather than 
being class-based. Because of this different basis, it can be less 
apparent how JavaScript allows you to create hierarchies of objects 
and to have inheritance of properties and their values.

Class-based vs. prototype-based languages
=========================================

Class-based object-oriented languages, such as Java and C++, are 
founded on the concept of two distinct entities: classes and instances.

- A class defines all of the properties (considering methods and 
  fields in Java, or members in C++, to be properties) that characterize
  a certain set of objects. A class is an abstract thing, rather than 
  any particular member of the set of objects it describes. For example,
  the Employee class could represent the set of all employees.
- An instance, on the other hand, is the instantiation of a class;
  that is, one of its members. For example, Victoria could be an 
  instance of the Employee class, representing a particular individual
  as an employee. An instance has exactly the properties of its parent 
  class (no more, no less).

A prototype-based language, such as JavaScript, does not make this 
distinction: it simply has objects. A prototype-based language has 
the notion of a prototypical object, an object used as a template 
from which to get the initial properties for a new object. Any object
can specify its own properties, either when you create it or at run time.
In addition, any object can be associated as the prototype for another 
object, allowing the second object to share the first object's properties.

Defining a class
================
In class-based languages, you define a class in a separate class definition.
In that definition you can specify special methods, called constructors, 
to create instances of the class. A constructor method can specify initial 
values for the instance's properties and perform other processing appropriate 
at creation time. You use the new operator in association with the constructor
method to create class instances.


JavaScript follows a similar model, but does not have a class definition 
separate from the constructor. Instead, you define a constructor function 
to create objects with a particular initial set of properties and values. 
Any JavaScript function can be used as a constructor. You use the new 
operator with a constructor function to create a new object.


Subclasses and inheritance
==========================
In a class-based language, you create a hierarchy of classes through the
class definitions. In a class definition, you can specify that the new 
class is a subclass of an already existing class. The subclass inherits
all the properties of the superclass and additionally can add new properties
or modify the inherited ones. For example, assume the Employee class 
includes only the name and dept properties, and Manager is a subclass 
of Employee that adds the reports property. In this case, an instance
of the Manager class would have all three properties: name, dept, and reports.


JavaScript implements inheritance by allowing you to associate a prototypical
object with any constructor function. So, you can create exactly the
Employee — Manager example, but you use slightly different terminology. 
First you define the Employee constructor function, specifying the 'name' 
and 'dept' properties. Next, you define the 'Manager' constructor function,
calling the 'Employee' constructor and specifying the reports property. 
Finally, you assign a new object derived from Employee.prototype 
as the prototype for the Manager constructor function. Then, when you 
create a new 'Manager', it inherits the 'name' and 'dept' properties 
from the 'Employee' object.


Adding and removing properties
==============================
In class-based languages, you typically create a class at compile time 
and then you instantiate instances of the class either at compile time
or at run time. You cannot change the number or the type of properties 
of a class after you define the class. In JavaScript, however, at run 
time you can add or remove properties of any object. If you add a 
property to an object that is used as the prototype for a set of objects,
the objects for which it is the prototype also get the new property.




Comparison of class-based (Java) and prototype-based (JavaScript) object systems
================================================================================

Class-based (Java)												          Prototype-based (JavaScript)
------------------------------------------------------------------------------------------------------
>Class and instance are distinct entities.                                >All objects are instances.
>Define a class with a class definition; instantiate a                    >Define and create a set of objects with constructor functions.
  class with constructor methods.
>Create a single object with the new operator.							  >Same.
>Construct an object hierarchy by using class definitions                 >Construct an object hierarchy by assigning an object as the 
    to define subclasses of existing classes.                                prototype associated with a constructor function.
>Inherit properties by following the class chain.                         >Inherit properties by following the prototype chain.
>Class definition specifies all properties of all instances               >Constructor function or prototype specifies an initial set of 
   of a class. No way to add properties dynamically at runtime.               properties. Can add or remove properties dynamically to 
                                                                              individual objects or to the entire set of objects.
*/


/*
The Employee Example

The rest of this paper works with the simple employee hierarchy shown in Figure 1.



Figure - 1    A simple object hierarchy

  	       			      --------------
					           |   Employee   |
                      --------------
							            |     |
	  	            ________|     |_______
                 |                      |
                 |                      |
                 |                      |
            ------------             -------------
           |  Manager   |     	    |  Worker Bee |
            ------------             -------------
            					      	      	|     |
            				  	      ________|     |_______
            				         |                      |
            				         |                      |
            				         |                      |
            			  --------------           -------------
            		   |  Salesperson |         |   Engineer  |
            		    --------------	         -------------

--> 'Employee' has the properties 'name' (whose value defaults to the empty string) and 'dept' (whose value defaults to "general").

--> 'Manager' is based on 'Employee'. It adds the 'reports' property (whose value defaults to an empty array, intended to have an 
      array of 'Employee' objects as its value).

--> 'WorkerBee' is also based on 'Employee'. It adds the 'projects' property (whose value defaults to an empty array, intended to
      have an array of strings as its value).

--> 'SalesPerson' is based on 'WorkerBee'. It adds the 'quota' property (whose value defaults to 100). It also overrides the 
      'dept' property with the value "sales", indicating that all salespersons are in the same department.

--> 'Engineer' is based on WorkerBee. It adds the 'machine' property (whose value defaults to the empty string) and also overrides
       the 'dept' property with the value "engineering".



Creating the hierarchy
======================

There are several ways to define appropriate constructor functions to implement
the Employee hierarchy. How you choose to define them depends largely on what 
you want to be able to do in your application.

This section shows how to use very simple (and comparatively inflexible)
definitions to demonstrate how to get the inheritance to work. In these
definitions, you cannot specify any property values when you create an object.
The newly-created object simply gets the default values, which you can change
at a later time.


In a real application, you would probably define constructors that allow you 
to provide property values at object creation time. For now, these simple 
definitions demonstrate how the inheritance occurs.


The following Java and JavaScript Employee definitions are similar. The only 
difference is that you need to specify the type for each property in Java 
but not in JavaScript (this is due to Java being a strongly typed language 
while JavaScript is a weakly typed language).


JavaScript                                                    Java
==========                                                    ====
function Employee() {                                         public class Employee {
  this.name = "";                                                 public String name = "";
  this.dept = "general";                                          public String dept = "general";
}                                                             }


The `Manager` and `WorkerBee` definitions show the difference in how to 
specify the next object higher in the inheritance chain. In JavaScript, 
you add a prototypical instance as the value of the prototype property 
of the constructor function. You can do so at any time after you define 
the constructor. In Java, you specify the superclass within the class 
definition. You cannot change the superclass outside the class definition.


JavaScript                                                      Java
==========                                                      ====  

function Manager() {                                            public class Manager extends Employee {  
  Employee.call(this);                                              public Employee[] reports = new Employee[0];
  this.reports = [];                                            }
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {                                          public class WorkerBee extends Employee {
  Employee.call(this);                                              public String[] projects = new String[0];
  this.projects = [];                                           }
}
WorkerBee.prototype = Object.create(Employee.prototype);


The `Engineer` and `SalesPerson` definitions create objects that descend 
from `WorkerBee` and hence from `Employee`. An object of these types has
properties of all the objects above it in the chain. In addition, these
definitions override the inherited value of the `dept` property with new
values specific to these objects.


JavaScript                                                      Java
==========                                                      ====

function SalesPerson() {                                        public class SalesPerson extends WorkerBee {
   WorkerBee.call(this);                                            public double quota;
   this.dept = "sales";                                             public dept = "sales";  
   this.quota = 100;                                                public quota = 100.0;  
}                                                               }    
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {                                           public class Engineer extends WorkerBee {
   WorkerBee.call(this);                                            public String machine;  
   this.dept = "engineering";                                       public dept = "engineering";
   this.machine = "";                                               public machine = "";
}                                                                   }
Engineer.prototype = Object.create(WorkerBee.prototype);



Using these definitions, you can create instances of these objects that 
get the default values for their properties. The next figure(Figure - 3)
illustrates using these JavaScript definitions to create new objects 
and shows the property values for the new objects.

Note: The term instance has a specific technical meaning in class-based 
languages. In these languages, an instance is an individual instantiation
of a class and is fundamentally different from a class. In JavaScript, 
"instance" does not have this technical meaning because JavaScript does
not have this difference between classes and instances. However, in 
talking about JavaScript, "instance" can be used informally to mean an
object created using a particular constructor function. So, in this
example, you could informally say that jane is an instance of Engineer.
Similarly, although the terms parent, child, ancestor, and descendant 
do not have formal meanings in JavaScript; you can use them informally
to refer to objects higher or lower in the prototype chain.

*/







/*

Creating objects with the simple definitions
============================================

Object hierarchy

The following hierarchy is created using the code on the right side.

Figure - 3    


      				       Object hierarchy                                  Individual objects
------------------------------------------------------------------------------------------------

                       --------------                                   jim = new Employee();
                      |   Employee   |                                  jim.name is ''
                       --------------                                   jim.dept is 'general'
                           |    |
                           |    |
            _______________|    |______________
           |                                   |                       sally = new Manager();
           |                                   |                       sally.name is ''
           |                                   |                       sally.dept is 'general'
           |                                   |                       sally.reports is [] 
  ---------------                      --------------                
 |   Manager     |                    |  WorkerBee   |                 mark = new WorkerBee();
  ---------------                      --------------                  mark.name is ''
                                          |     |                      mark.dept is 'general'
                                          |     |                      mark.projects is []
                                          |     |
                              ____________|     |________
                             |                           |            
                             |                           |
                             |                           |
                             |                           |
                             |                           |             fred = new SalesPerson(); 
                     ----------------            ------------------    fred.name is ''
                    |  SalesPerson   |          |    Engineer      |   fred.dept is 'sales'
                     ----------------            ------------------    fred.projects is []
                                                                       fred.quota is 100

                                                                       jane = new Engineer;
                                                                       jane.name is ''
                                                                       jane.dept is 'engineering'
                                                                       jane.projects is []
                                                                       jane.machine is ''

*/


/*
Object Properties

This section discusses how objects inherit properties from other objects in the prototype
chain and what happens when you add a property at runtime.

Inheriting Properties
Assume you create the 'mark' object as a 'WorkerBee' as shown in Figure 3 with this statement:

var mark = new WorkerBee;

When JavaScript sees the `new` operator, it creates a new generic object and passes 
this new object as the value of the `this` keyword to the `WorkerBee` constructor function. 
The constructor function explicitly sets the value of the `projects` property, and
implicitly sets the value of the internal `__proto__` property to the value of 
`WorkerBee.prototype`. (That property name has two underscore characters at the 
front and two at the end.) The `__proto__` property determines the prototype chain 
used to return property values. Once these properties are set, JavaScript returns 
the new object and the assignment statement sets the variable mark to that object.


This process does not explicitly put values in the `mark` object (local values) 
for the properties that `mark` inherits from the prototype chain. When you ask 
for the value of a property, JavaScript first checks to see if the value exists 
in that object. If it does, that value is returned. If the value is not there 
locally, JavaScript checks the prototype chain (using the `__proto__` property). 
If an object in the prototype chain has a value for the property, that value
is returned. If no such property is found, JavaScript says the object does not 
have the property. In this way, the `mark` object has the following properties and values:

mark.name = "";
mark.dept = "general";
mark.projects = [];




*/