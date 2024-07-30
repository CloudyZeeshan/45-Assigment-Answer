let currentUsers:string[]=["TaHa","DaNiyal","SalMan","Hamzah","John"];
let newUsers:string[]=["Bilal","TaHa","Dawood","jameel","Hamzah"];

newUsers.forEach(newUsersName => {
    let lowercase =newUsersName.toLowerCase()

    if(currentUsers.map(cUser=>cUser.toLowerCase().includes(lowercase))){
        console.log(`The username ${newUsersName} is not available.Please write a different user name`);
    }
    else{
        console.log(`The username ${newUsersName} is available.`)
    }
})