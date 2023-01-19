class Avatar {
  constructor(_positionX, _positionY, _coinsBag) {
    if (_positionX >= 0 && _positionY >= 0 && _coinsBag >= 0) {
      this.positionX = _positionX;
      this.positionY = _positionY;
      this.coinsBag = _coinsBag;
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
    if (steps > 0) {
      this.positionY += steps;
    }
  }

  back(steps) {
    if (steps > 0) {
      this.positionY -= steps;
    }
  }

  right(steps) {
    if (steps > 0) {
      this.positionX += steps;
    }
  }

  left(steps) {
    if (steps > 0) {
      this.positionX -= steps;
    }
  }

  coinsBag1(coins) {
    if (coins > 0) {
      this.coinsBag += coins;
    }
  }
}

let Avatar1 = new Avatar(0, 0, 0);

console.log(Avatar1);
Avatar1.right(10);
console.log(Avatar1);
Avatar1.forward(10);
Avatar1.coinsBag1(80);

Avatar1.left(-5);
Avatar1.left(5);
Avatar1.back(-5);

console.log(Avatar1.positionX2);
