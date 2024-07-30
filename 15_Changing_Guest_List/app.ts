let guestList:string[]=["Taimoor","Ahsan","Jawad"];
for(let i=0 ; i<guestList.length;i++){console.log("Dear Mr", guestList[i],"you will invite to dinner")};

let absentGuest=guestList.shift();
console.log("Mr",absentGuest ,"is not comming to dinner");

guestList.unshift("Talha")

for(let i=0 ; i<guestList.length;i++){console.log("Dear Mr", guestList[i],"you will invite to dinner")};