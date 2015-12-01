/*
		Q) what 'source code charset' and  'Javascript execution charset' in JS?
		
		A) JS code is interpreted in Unicode.
		I may have a Shift-JIS source code file. That use Japanese characters as variables names.
		The source code charset is Shift-JIS. The browser cache these JIS data, convert it to UTF-16,
		then pass them to the JS engine for parsing. So the code is parsed and executed in Unicode.


		JS engine has many parts. One of them is the JS parser. It takes utf-16 source code and
		parse it to create AST. Another part is compiler. It takes AST and produce binary code.

*/


/*
		Q) What is the difference between JavaScript and ECMAScript?
	
		A) I think a little history lesson is due.

		Javascript was originally named Mocha and changed to Livescript but ultimately became Javascript.

		It's important to note that Javascript came before Ecmascript and the history will tell you why.

		To start from the beginning, Javascript derived its name from Java and initally Brendan Eich (the 
		creator of JS) was asked to develop a language that resembled Java for the web for Netscape.

		Eich, however decided that Java was too complicated with all its rules and so set out to create a 
		simpler language that even a beginner could code in. This is evident in such things like the 
		relaxing of the need to have a semicolon.

		After the language was complete, the marketing team of Netscape requested Sun to allow them to 
		name it Javascript as a marketing stunt and hence why most people who have never used Javascript 
		think it's related to Java.

		About a year or two after Javascript's release in the browser, Microsoft's IE took the language 
		and started making its own implementations such as JScript. At the same time, IE was dominating 
		the market and not long after Netscape had to shut its project.

		Before Netscape went down, they decided to start a standard that would guide the path of 
		Javascript, named Ecmascript.

		Ecmascript had a few releases and in 1999 they released their last version (Ecmascript 3) 
		before they went into hibernation for the next 10 years. During this 10 years, Microsoft 
		dominated the scenes but at the same time they weren't improving their product and hence Firefox 
		was born (led by Eich) and a whole heap of other browsers such as Chrome, Opera.

		Ecmascript released its 5th Edition in 2009 (the 4th edition was abandoned) with features such as 
		strict mode. Since then, Ecmascript has gained a lot of momentum and is scheduled to release its 
		6th Edition in a few months from now with the biggest changes its had thus far.

		You can use a list of features for Ecmascript 6 here http://kangax.github.io/es5-compat-table/es6/ 
		and also the browser support. You can even start writing Ecmascript 6 like you do with Coffeescript 
		and use a compiler to compile down to Ecmascript 5.

		Wether Ecmascript is the language and Javascript is a dialect is arguable but not important, if you 
		continue to think like this it might confuse you. There is no compiler out there that would run 
		Ecmascript and I believe Javascript is considered the Language which implements a standard called Ecmascript.

		There are also other noticeable languages that implement Ecmascript such as Lua (commonly used 
		as a scripting language for games) and Actionscript (used for flash)

		
		Technically ECMAScript is the language that everyone is using and implementing -- it is the spec 
		created many years ago when Netscape and Microsoft sat down and attempted to standardise the 
		scripting between JavaScript (Netscape's scripting language) and JScript (Microsoft's).

		Subsequently all these engines are ostensibly implementing ECMAScript, however JavaScript (the name) 
		now hangs around for both traditional naming reasons, and as a marketing term by mozilla for their 
		various non-standard extensions (which they want to be able to actually "version")

		JavaScript = ECMAScript + DOM API;
		ECMAScript® Language Specification defines all logic for creating and editing objects, arrays, numbers, etc...

		DOM API makes it possible to communicate with HTML/XML documents (e.g. document.getElementById('id');).

		History of JavaScript naming:

		Mocha ► LiveScript ► JavaScript ► (part of JS resulted in) ECMA-262 ► ECMAScript ► JavaScript (consists of ECMAScript + DOM API)
*/

