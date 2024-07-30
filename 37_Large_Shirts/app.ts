function makeShirt(size:string="large",text:string="I love TypeScript.") {
    console.log(`Creating a ${size} shit with the message: ${text}`);    
}

makeShirt();
makeShirt("medium");
makeShirt("small","I love python");