
console.log("Equality test with string: ", "Apple" === "Apple");

console.log("Inequality test with string: ", ("Apple"as string) !="orange");

console.log("Lower case funcation test: ", "HELLO".toLowerCase() === "hello");

console.log("Equalitty test wiith numbers: ",  26  === 26);

console.log("INequality test with numbers: ", (26 as number) != 35);

console.log("Greater than test: ", 10>5);

console.log("Less than test: ", 5<10);

console.log("Greater than and equal to test: ", 10>=10);

console.log("Less than or equal to test: ", 5<=10);

console.log("And operator test: ", 5===5 && 10>5);

console.log("Or opteror test: ", 5===5 || false);

const fruits:string[]=["Nashpati","Banana","Amrood"];
console.log("Test 'Nashpati' in the array: ", fruits.includes("Nashpati"));

console.log("Testing 'Apple' is not in array: ", !fruits.includes("Apple"));