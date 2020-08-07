const { Seeder } = require("mongoose-data-seed");
const UnityType = require("../../models/UnityType");

const data = [
  {
    name: "Conjunto",
    abbr: "CONJ",
  },
  {
    name: "Kit",
    abbr: "KIT",
  },
  {
    name: "Metro",
    abbr: "M",
  },
  {
    name: "Metro quadrado",
    abbr: "M²",
  },
  {
    name: "Peça",
    abbr: "PÇ",
  },
  {
    name: "Unidade",
    abbr: "UN",
  },
];

class UnityTypesSeeder extends Seeder {
  async shouldRun() {
    return UnityType.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return UnityType.create(data);
  }
}

module.exports = UnityTypesSeeder;
