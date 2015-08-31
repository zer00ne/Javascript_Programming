/*
Window Overview

Most commonly used properties and methods of the Window object. As usual, 
the client-side reference section contains complete coverage of Window 
object properties and methods.



The most important properties of the Window object are the following:

closed
A boolean value that is true only if the window has been closed.

defaultStatus, status
The text that appears in the status line of the browser.

document
A reference to the Document object that represents the HTML document 
displayed in the window. The Document object is covered in detail in Chapter 14.

frames[]
An array of Window objects that represent the frames (if any) within the window.

history
A reference to the History object that represents the user's browsing history
for the window.

location
A reference to the Location object that represents the URL of the document
displayed in the window. Setting this property causes the browser to load a
new document.

name
The name of the window. Can be used with the target attribute of the HTML <a> tag,
for example.

opener
A reference to the Window object that opened this one, or null if this window 
was opened by the user.

parent
If the current window is a frame, a reference to the frame of the window that
contains it.

self
A self-referential property; a reference to the current Window object. A 
synonym for window.

top
If the current window is a frame, a reference to the Window object of the
top-level window that contains the frame. Note that top is different from
parent for frames nested within other frames.

window
A self-referential property; a reference to the current Window object. A synonym for self.
The Window object also supports a number of important methods:

alert( ), confirm( ), prompt( )
Display simple dialog boxes to the user and, for confirm( ) and prompt( ),
get the user's response.

close( )
Close the window.

focus( ), blur( )
Request or relinquish keyboard focus for the window. The focus( ) method also
ensures that the window is visible by bringing it to the front of the stacking order.

moveBy( ), moveTo( )
Move the window.

open( )
Open a new top-level window to display a specified URL with a specified set of features.

print( )
Print the window or frame--same as if the user had selected the Print button
from the window's toolbar (Netscape 4 and later and IE 5 and later only).

resizeBy( ), resizeTo( )
Resize the window.

scrollBy( ), scrollTo( )
Scroll the document displayed within the window.

setInterval( ), clearInterval( )
Schedule or cancel a function to be repeatedly invoked with a specified delay
between invocations.

setTimeout( ), clearTimeout( )
Schedule or cancel a function to be invoked once after a specified number of milliseconds.

*/






/*
The confirm( ) and prompt( ) methods block--that is, those methods do not return 
until the user dismisses the dialog boxes they display. This means that when you 
pop up one of these boxes, your code stops running and the currently loading
document, if any, stops loading until the user responds with the requested input.
There is no alternative to blocking for these methods--their return value is the
user's input, so they must wait for the user before they can return. In most
browsers, the alert( ) method also blocks and waits for the user to dismiss the 
dialog box. In some browsers, however (notably Netscape 3 and 4 on Unix platforms),
alert( ) does not block.

*/



/*
Timeouts and Intervals:
The setTimeout( ) method of the Window object schedules a piece of JavaScript code
to be run at some specified time in the future. The clearTimeout( ) method can be
used to cancel the execution of that code. setTimeout( ) is commonly used to 
perform animations or other kinds of repetitive actions. If a function runs and
then uses setTimeout( ) to schedule itself to be called again, we get a process
that repeats without any user intervention. JavaScript 1.2 has added the
setInterval( ) and clearInterval( ) methods, which are like setTimeout( ) and 
clearTimeout( ), except that they automatically reschedule the code to run
repeatedly; there is no need for the code to reschedule itself.
*/



/*
Relationships Between Frames
We've already seen that the open( ) method of the Window object returns a new
Window object representing the newly created window. We've also seen that this
new window has an opener property that refers back to the original window. In
this way, the two windows can refer to each other, and each can read properties 
and invoke methods of the other. The same thing is possible with frames. Any
frame in a window can refer to any other frame through the use of the frames, 
parent, and top properties of the Window object.

Every window has a frames property. This property refers to an array of Window
objects, each of which represents a frame contained within the window. (If a 
window does not have any frames, the frames[] array is empty and frames.length
is zero.) Thus, a window (or frame) can refer to its first subframe as frames[0],
its second subframe as frames[1], and so on. 

Although each window and frame defines an independent JavaScript execution context,
this does not mean that JavaScript code running in one window is isolated from code 
running in other windows. Code running in one frame has a different Window object at
the top of its scope chain than code running in another frame. However, the code from 
both frames is executed by the same JavaScript interpreter, in the same JavaScript 
environment. As we've seen, one frame can refer to any other frame using the frames,
parent, and top properties. So, although JavaScript code in different frames is 
executed with different scope chains, the code in one frame can still refer to and 
use the variables and functions defined by code in another frame.
*/