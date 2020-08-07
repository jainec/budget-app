const { Seeder } = require("mongoose-data-seed");
const City = require("../../models/City");

const data = [
  {
    name: "Nomeinventado",
    stateId: "5f2db0a872343507c5dc0ba2",
  },
  {
    name: "Cidade do amor",
    stateId: "5f2db0a872343507c5dc0ba2",
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
