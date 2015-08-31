/*
1) what 'source code charset' and  'Javascript execution charset' in JS?
A) JS code is interpreted in Unicode.
I may have a Shift-JIS source code file. That use Japanese characters as variables names.
The source code charset is Shift-JIS. The browser cache these JIS data, convert it to UTF-16,
then pass them to the JS engine for parsing. So the code is parsed and executed in Unicode.


JS engine has many parts. One of them is the JS parser. It takes utf-16 source code and
parse it to create AST. Another part is compiler. It takes AST and produce binary code.


*/