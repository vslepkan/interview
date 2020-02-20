class CardFactory {
  constructor(type = "visa") {
    this.type = type;
  }

  add(firstName = "", lastName = "") {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
      throw new Error("Should be a string");
    }

    return new Card({ firstName, lastName, type: this.type });
  }
}

class Card {
  constructor({ firstName, lastName, type }) {
    this.randomMonth = Math.round(Math.random() * 11 + 1);
    this.month =
      this.randomMonth < 9 ? "0" + this.randomMonth : this.randomMonth;
    this.years = [30, 29, 28, 34, 24, 25, 26, 27];
    this.year = Math.round(Math.random() * (this.years.length - 1));
    this.type = type.toUpperCase();
    this.fullName = `${firstName
      .trim()
      .toUpperCase()} ${lastName.trim().toUpperCase()}`;
    this.expire = `${this.month}/${this.years[this.year]}`;
    this.cvv = Math.round(Math.random() * 900 + 100);

    this.result = {
      name: this.fullName,
      type: this.type,
      expire: this.expire,
      cvv: this.cvv
    };

    if (!firstName || !lastName) {
      delete this.result.name;
    }

    return this.result;
  }
}

let visaFactory = new CardFactory();
let masterFactory = new CardFactory("mastercard");

let AnonymousVisa = visaFactory.add();
let DenisVisa = visaFactory.add("Denis", "Abokov");
let AnnaVisa = masterFactory.add("Anna", "Bober");

AnonymousVisa;
DenisVisa;
AnnaVisa;
