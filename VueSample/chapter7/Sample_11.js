`use strict`
var s1 = new Set();
s1.add("Apple");
s1.add("Apple");

s1.add("PEAR");
s1.add("Grape");

console.log(s1)

var john = new Set(["Apple", "Grape", "Pear"]);
var susan = new Set(["PineApple","kiwi", "Pear"]);

var union = new Set([...john.values(), ...susan.values()]);
console.log(union);

var intersection = new Set([...john.values()].filter(e=>susan.has(e)));
console.log(intersection);

var diff= new Set([...john.values()].filter(e=> !susan.has(e)));
console.log(diff);