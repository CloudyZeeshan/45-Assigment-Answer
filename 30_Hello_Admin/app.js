const userNames = ["admin", "Bugs Bunny", "Daffy Duck", "Sylvester", "Tweety"];
userNames.forEach(userNames => {
    if (userNames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames},thanks you for logging again.`);
    }
});
export {};
