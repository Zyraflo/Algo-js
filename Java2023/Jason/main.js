let competence = [
  //Les différents caractères des survivants
  " le peureux",
  " l'idiot",
  " le geek",
  " la blonde",
  " le relou",
  " le chanceux",
  " le sportif",
];
let nom_survivants = [
  //Les différents nom des survivants
  "Alexandrin",
  "Antonin",
  "Anna",
  "Jérôme",
  "Clara",
  "Tony",
  "Emma",
];

let tableaumorts = ""; //Le tableau pour repertoriés les survivants morts

class Personnage {
  // On crée les survivants
  constructor(nom, pointsdevie, hit, attaque_prob, death_hit_prob) {
    this.nom = nom;
    this.hp = pointsdevie;
    this.degats = hit;
    this.attaque = attaque_prob;
    this.contrecoup = death_hit_prob;
  }

  encaisserDegats(hit) {
    // La fonction qui gère les degats reçus
    if (Math.random() < this.contrecoup) {
      console.log(
        `${this.nom} contre-attaque et encaisse ${hit} points de dégâts.`
      );
      this.hp -= hit;
    } else {
      console.log(`${this.nom} encaisse ${hit} points de dégâts.`);
    }

    if (this.hp <= 0) {
      console.log(`${this.nom} a été vaincu.`);
    }
  }

  attaquer(target) {
    //La fonction des combat entre attaque et esquive
    if (Math.random() < this.attaque) {
      console.log(
        `${this.nom} attaque ${target.nom} et lui inflige ${this.degats} points de dégâts.`
      );
      target.hp -= this.degats;
    } else {
      console.log(`${this.nom} a raté son attaque contre ${target.nom}.`);
    }
  }
}

class Mechant {
  //Création du tueur
  constructor(nom_mechant, pointsdevie, hit, attaque_prob, death_hit_prob) {
    this.nom = nom_mechant;
    this.hp = pointsdevie;
    this.degats = hit;
    this.attaque = attaque_prob;
    this.contrecoup = death_hit_prob;
  }

  encaisserDegats(hit) {
    if (Math.random() < this.contrecoup) {
      console.log(
        `${this.nom} contre-attaque et encaisse ${hit} points de dégâts.`
      );
      this.hp -= hit;
    } else {
      console.log(`${this.nom} encaisse ${hit} points de dégâts.`);
    }

    if (this.hp <= 0) {
      console.log(`${this.nom} a été vaincu.`);
    }
  }

  attaquer(target) {
    if (Math.random() < this.attaque) {
      console.log(
        `${this.nom} attaque ${target.nom} et lui inflige ${this.degats} points de dégats.`
      );
      target.hp -= this.degats;
    } else {
      console.log(`${this.nom} a raté son attaque contre ${target.nom}.`);
    }
  }
}

let survivants = new Personnage( //On mets les stats des survivants
  nom_survivants[Math.floor(Math.random() * 4)] +
    competence[Math.floor(Math.random() * 4)],
  110,
  20,
  0.4,
  0.2
);
let survivants2 = new Personnage(
  nom_survivants[Math.floor(Math.random() * 4)] +
    competence[Math.floor(Math.random() * 4)],
  100,
  20,
  0.6,
  0.4
);
let survivants3 = new Personnage(
  nom_survivants[Math.floor(Math.random() * 4)] +
    competence[Math.floor(Math.random() * 4)],
  90,
  20,
  0.7,
  0.3
);
let survivants4 = new Personnage(
  nom_survivants[Math.floor(Math.random() * 4)] +
    competence[Math.floor(Math.random() * 4)],
  40,
  40,
  0.8,
  0.2
);
let survivants5 = new Personnage(
  nom_survivants[Math.floor(Math.random() * 4)] +
    competence[Math.floor(Math.random() * 4)],
  130,
  30,
  0.1,
  0.7
);

let tableausurvivants = [
  survivants,
  survivants2,
  survivants3,
  survivants4,
  survivants5,
];

let i = 0;

let tueur = new Mechant("Jason le tueur", 100, 80, 0.7, 0.3);

let tour = 1; //Début du jeu
while (tableausurvivants[i % tableausurvivants.length].hp > 0 && tueur.hp > 0) {
  console.log(`Tour ${tour}:`);

  tableausurvivants[i % tableausurvivants.length].attaquer(tueur);

  if (tueur.hp <= 0) {
    console.log(
      `${tableausurvivants[i % tableausurvivants.length].nom} a vaincu.e Jason.`
    );
    break;
  }

  tueur.attaquer(tableausurvivants[i % tableausurvivants.length]);

  if (tableausurvivants[i % tableausurvivants.length].hp <= 0) {
    console.log(
      `${tueur.nom} a tué ${
        tableausurvivants[i % tableausurvivants.length].nom
      }`
    );
    tableaumorts += tableausurvivants[i % tableausurvivants.length].nom + ", ";
    break;
  }

  console.log(
    `${tableausurvivants[i % tableausurvivants.length].nom} : ${
      tableausurvivants[i % tableausurvivants.length].hp
    } hp`
  );
  console.log(`${tueur.nom} : ${tueur.hp} hp`);
  tour++;
  i++;
}

if (tableausurvivants[i % tableausurvivants.length].hp <= 0) {
  console.log("Le survivant à été tué par Jason. Jason gagne !");
  console.log("Les survivants ont perdus : " + tableaumorts);
} else if (tueur.hp <= 0) {
  console.log("Jason à été vaincu par le survivant ! Les survivants gagne !");
  console.log("Les survivants ont gagnés mais RIP à : " + tableaumorts);
} else {
  console.log(
    "Le combat se termine en match nul. Le survivant et Jason sont tous les deux fatigués !"
  );
  console.log("Les survivants ont gagnés ? : " + tableaumorts);
}
