function makeSandwich(item) {
    console.log("\nMaking your sandwich with:");
    item.forEach(element => console.log("- " + element));
    console.log("Enjoy your sandwich !");
}
makeSandwich(["Ham", "Cheese", "lettuce"]);
makeSandwich(["Turkey", "Bacon"]);
makeSandwich(["Peanut butter", "Jelly"]);
export {};
