class Pokemon {
  constructor(name, atk, def, hp, luck) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.luck = Math.random();
  }

  atkPokemon(target) {
    let damages = this.atk - target.def;
    target.hp -= damages;
    if (target.hp <= 0) {
      console.log("$(target.name) est mort");
    }
  }
}

let moustillon = new Pokemon("Moustillon", 10, 5, 30, 75);
let rondoudou = new Pokemon("Rondoudou", 15, 3, 30, 50);

let = percent = 75;
let isLucky = Math.floor(Math.random() * 100) <= percent;

console.log(moustillon.isLucky());
