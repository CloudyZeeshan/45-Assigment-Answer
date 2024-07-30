let currentUsers = ["TaHa", "DaNiyal", "SalMan", "Hamzah", "John"];
let newUsers = ["Bilal", "TaHa", "Dawood", "jameel", "Hamzah"];
newUsers.forEach(newUsersName => {
    let lowercase = newUsersName.toLowerCase();
    if (currentUsers.map(cUser => cUser.toLowerCase().includes(lowercase))) {
        console.log(`The username ${newUsersName} is not available.Please write a different user name`);
    }
    else {
        console.log(`The username ${newUsersName} is available.`);
    }
});
export {};
