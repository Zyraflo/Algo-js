class Personnage {
    constructor(name, mh) {
      this.name = name; //
      this.mh = mh; //
      this.musics = [
        "Anissa",
        "Chanson Populaire",
        "Elle me dit",
        "Quand la musique est bonne",
        "Time Time",
      ];
      this.artists = [
        "Wejdene",
        "Claude François",
        "Mika",
        "Jean-Jacques Goldman",
        "Trei Degete",
      ];
    }
  
    next(target) {
      target.feux += 1;
  
      let selection = target.ranMusic();
  
      if (selection == 0) {
        this.mh -= 1;
        target.changments += 1;
        console.log(
          `${target.feux}. Oh non ! ${this.name} est en train d'écouter ${
            this.musics[0]
          } de ${
            this.artists[0]
          }! perds 1 point de santée mental et change de taxi ! ${
            30 - target.feux
          } feux rouges restants !`
        );
      } else {
        console.log(
          `${target.feux}. ${this.name} arrive à un feu rouge et la radio joue ${
            this.musics[selection]
          } de ${this.artists[selection]}! Le trajet continue, ${
            30 - target.feux
          } feux rouges restants !`
        );
      }
    }
  }

class Trajet {
  constructor(radio, feux, changments) {
    this.radio = radio;
    this.feux = feux;
    this.changments = changments;
  }

  ranMusic() {
    return Math.floor(Math.random() * 5);
  }
}



let antoine = new Personnage("Antoine", 10);
let run = new Trajet(0, 0, 0);

while (antoine.mh > 0 && run.feux < 30) {
  antoine.next(run);
  if (run.feux == 30) {
    console.log(
      `Incroyable, il a survécu jusqu'à sa destination ! ${
        run.changments + 1
      } taxis seulement pour y arriver !`
    );
    break;
  }
  
  if (antoine.mh == 0) {
    console.log(
      `Explosion !!! Il n'a malheureusement pas survécu.. ${
        run.feux
      } feux rouges passés et ${run.changments + 1} taxi empruntés!`
    );
    break;
  }
}
