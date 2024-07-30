let magician:string[]=["Harry potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];

function makeGreat(magicianArray:string[]) {
    for(let i=0; i<magicianArray.length; i++){
        magician[i] = "the Great" + magicianArray[i]
    }
}

function showMagicians(magician:string[]) {
    magician.forEach(element => {
        console.log(element);
    })
}

makeGreat(magician);
showMagicians(magician);