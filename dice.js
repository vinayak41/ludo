class Dice {
  constructor() {
    this._value = 1;
  }

  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
  }
}

export default Dice;
