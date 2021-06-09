// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   } 


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts); 

function writeCards(name, event) {
    let newCards = [];
    for (let i = 0; i < name.length; i++) {
        newCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }

    return newCards;
}


function countDown(x) {
    let startingInt = x;
    while (x > -1) {
        console.log(x--);
    }
}

countDown(10);