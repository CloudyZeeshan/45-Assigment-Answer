let magician:string[]=["Harry potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];

function copyArray(arr:string[]) {
    return [...arr]
}

function makeGreat(magicianArray:string[]) {
    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] = "the Great" + magicianArray[i]
    }
}

function showMagicians(magician:string[]) {
    magician.forEach(element => {
        console.log(element);
    })
}

const copyMagicianArry = copyArray(magician)

makeGreat(copyMagicianArry);

console.log("\n\nThis is my orignal array:")
showMagicians(magician);

console.log("\n\nThis is my modfied copy of the array:")
showMagicians(copyMagicianArry);