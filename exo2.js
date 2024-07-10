let givenNumber;

function askNumber() {
   givenNumber = parseInt(prompt("Entrez un nombre :"));
   
}

 function didIWin(givenNumber) {
   if (givenNumber < 22) {
      alert("Le nombre est trop petit !")
   } else if (givenNumber > 22) {
      alert("Le nombre est trop grand!")
   } else {
      alert("Bravo ! Vous avez deviné le nombre")
   }
   return givenNumber === 22;
}

function gamePlay() {
   askNumber();
   while (!didIWin(givenNumber)) {
      askNumber();
   }
}

gamePlay();
