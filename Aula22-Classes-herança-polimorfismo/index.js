class Avatar {
  constructor(_positionX, _positionY, _coinsBag) {
    if (_positionX >= 0 && _positionY >= 0 && _coinsBag >= 0) {
      this.positionX = _positionX;
      this.positionY = _positionY;
      this.coinsBag = _coinsBag;
      this.lifePoints = 10;
      this.damagePoints = 1;
    }else{
      throw "Não é possível criar o boneco sem um parâmetro"
    }
  }

  get positionX2() {
    return this.positionX;
  }
  get positionY2() {
    return this.positionY;
  }
  get coinsBag2() {
    return this.coinsBag;
  }

  forward(steps) {
    if (steps > 0 && this.lifePoints > 0) {
      this.positionY += steps;
    }if(steps <= 0){
      throw "Valor deve ser maior que 0"
    }if(this.lifePoints <= 0){
      throw "Métodos bloqueados! Você não tem mais pontos de vida!"
    }
  }

  back(steps) {
    if (steps > 0 && this.lifePoints > 0) {
      this.positionY -= steps;
    }if(steps <= 0){
      throw "Valor deve ser maior que 0"
    }if(this.lifePoints <= 0){
      throw "Métodos bloqueados! Você não tem mais pontos de vida!"
    }
  }

  right(steps) {
    if (steps > 0 && this.lifePoints > 0) {
      this.positionX += steps;
    }if(steps <= 0){
      throw "Valor deve ser maior que 0"
    }if(this.lifePoints <= 0){
      throw "Métodos bloqueados! Você não tem mais pontos de vida!"
    }
  }

  left(steps) {
    if (steps > 0 && this.lifePoints > 0) {
      this.positionX -= steps;
    }if(steps <= 0){
      throw "Valor deve ser maior que 0"
    }if(this.lifePoints <= 0){
      throw "Métodos bloqueados! Você não tem mais pontos de vida!"
    }
  }

  coinsBag1(coins) {
    if (coins > 0 && this.lifePoints > 0) {
      this.coinsBag += coins;
    }if(coins <= 0){
      throw "Valor deve ser maior que 0"
    }if(this.lifePoints <= 0){
      throw "Métodos bloqueados! Você não tem mais pontos de vida!"
    }
  }

  attack(){
    if (this.lifePoints > 0) {
      return this.damagePoints;
    }else{
      throw "Métodos bloqueados! Você não tem mais pontos de vida!"
    }
  }

  incomingAttack(damageValue){
    if (this.lifePoints > 0) {
      this.lifePoints -= damageValue;
    }else{
      throw "Métodos bloqueados! Você não tem mais pontos de vida!"
    }
  }

}

try {
  let Avatar1 = new Avatar(5,2, 3);

  console.log(Avatar1);
  // Avatar1.right(10);
  // console.log(Avatar1);

  
  // Avatar1.incomingAttack(2);
  // console.log(Avatar1);

  // Avatar1.attack();
  // Avatar1.back(-5);
  
  // Avatar1.incomingAttack(7);
  // console.log(Avatar1);
  // Avatar1.back(5);

  // Avatar1.attack();
  // console.log(Avatar1);
  
} catch (error) {
  console.log(error);
}

class Wizard extends Avatar{
  spells;
  damagePoints= 3;
  constructor(_positionX, _positionY, _coinsBag){
    super(_positionX, _positionY, _coinsBag);
    this.spells = 10;
  }

  attack(){
    if(this.spells > 0){
      this.spells -= 1;

      if(this.spells == 0){
        setTimeout(()=>{
          this.spells = 10;
          console.log("esse", newWizard);
          
        },5000);
      }
      return this.damagePoints;
    } 
  }

}

const newWizard = new Wizard(10, 10, 5);
newWizard.attack();
newWizard.attack();
newWizard.attack();
newWizard.attack();
newWizard.attack();
newWizard.attack();
newWizard.attack();
newWizard.attack();
newWizard.attack();
newWizard.attack();

console.log(newWizard);





// class Cowboy extends Avatar{
//   constructor(_positionX, _positionY, _coinsBag){
//     super(_positionX, _positionY, _coinsBag);
//     this.ammunition = 10;
//     this.damagePoints = 2;
//   }

//   attack(){
//     this.ammunition -= 1;
//     return this.damagePoints;
//   }

//   addammunition(){
//     this.ammunition += 1;
//   }

// }
// const newcowboy = new Cowboy(10, 10, 5);
// console.log(newcowboy)
// newcowboy.attack()
// console.log(newcowboy)
// newcowboy.attack()
// console.log(newcowboy)
// newcowboy.addammunition()
// console.log(newcowboy)

