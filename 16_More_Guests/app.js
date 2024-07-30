"use strict";
let guestList = ["Taimoor", "Ahsan", "Jawad"];
//for(let i=0 ; i<guestList.length;i++){console.log("Dear Mr", guestList[i],"you will invite to dinner")};
let absentGuest = guestList.shift();
console.log("Mr", absentGuest, "is not comming to dinner");
guestList.unshift("Talha");
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Mr", guestList[i], "you will invite to dinner");
}
;
console.log("Good news we just found a new big table so we are inviting 3 more guest");
guestList.unshift("Zeeshan");
guestList.splice(2, 0, "Haider");
guestList.push("Hassan");
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Mr", guestList[i], "you will invite to dinner");
}
;
