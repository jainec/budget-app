const { Seeder } = require("mongoose-data-seed");
const City = require("../../models/City");

const data = [
  {
    name: "Nomeinventado",
    stateId: "5f319ceea448c60cd60baf2f",
  },
  {
    name: "Cidade do amor",
    stateId: "5f319ceea448c60cd60baf2f",
  },
  {
    name: "Estância",
    stateId: "5f319ceea448c60cd60baf2f",
  },
  {
    name: "Aracaju",
    stateId: "5f319ceea448c60cd60baf2f",
  },
  {
    name: "Brasília",
    stateId: "5f319ceea448c60cd60baf2f",
  },
  {
    name: "São Paulo",
    stateId: "5f319ceea448c60cd60baf2f",
  },
];

class CitiesSeeder extends Seeder {
  async shouldRun() {
    return City.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return City.create(data);
  }
}

module.exports = CitiesSeeder;
