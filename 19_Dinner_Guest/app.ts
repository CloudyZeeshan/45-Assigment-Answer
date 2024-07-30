let guestList:string[]=["Taimoor","Ahsan","Jawad"];
//for(let i=0 ; i<guestList.length;i++){console.log("Dear Mr", guestList[i],"you will invite to dinner")};

let absentGuest=guestList.shift();
// console.log("Mr",absentGuest ,"is not comming to dinner");

guestList.unshift("Talha")

// for(let i=0 ; i<guestList.length;i++){console.log("Dear Mr", guestList[i],"you will invite to dinner")};
// console.log("Good news we just found a new big table so we are inviting 3 more guest");
guestList.unshift("Zeeshan");
guestList.splice(2,0,"Haider");
guestList.push("Hassan");

// for(let i=0 ; i<guestList.length;i++){console.log("Dear Mr", guestList[i],"you will invite to dinner")};

// console.log("sorry we can not arrange a big table, so we are invite two people ");

while(guestList.length > 2){
    let removeGuest=guestList.pop();
    // console.log(`Sorry Mr. ${removeGuest}`);
}

// for(let i=0 ; i<guestList.length;i++){console.log("Dear Mr", guestList[i],"you will invite to dinner")};

guestList.splice(0,2);
console.log(guestList);


// Exercise 19
// print a message indicating the number of people you are inviting a dinner

console.log(`Total number of Guest Arey ${guestList.length}`)






