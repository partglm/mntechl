const help = require('./newregex')
/* the regex
rx.rl (rl for return line) mean a return line("\n")
rx.idk (rl for i don't know) mean a all the charactere(numbers and letters)
rx.ou mean this | (it's the word OR but for the pattern)
rx.hm (hm for how much) is for having the same pattern but multiple time the arguments is the how much time you want the pattern
rx.rt (rt for part) is for a member of the pattern 
rx.to is for a letter or number to another letter or number example rx.to(0,6) return true for all number between 0 and 6 so the number 7 return false
rx.test is for testing your pattern

for example you can use this:
    const reg = rx.pt("#" + rx.rt(rx.to('A','F') + rx.to('a','f') + rx.to(0,9)) + rx.hm(6) + rx.ou() + rx.rt(rx.to('A','F') + rx.to('a','f') + rx.to(0,9)) + rx.hm(3))
    let match = rx.test(reg, "#FFFFFF")
    console.log(match);
for test if a string is a hexadecimal color or not (it return true or false)  
*/
/* yes i know i have translate in french and i do my explain in english (logic has left the chat)

*/
console.log(rx.test("test"))
help.fr.