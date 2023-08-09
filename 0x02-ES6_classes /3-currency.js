export default Currency {
  constructors(code, name) {
    this._code = code;
    this._name = name;
  }
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

