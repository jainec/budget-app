const { Seeder } = require("mongoose-data-seed");
const State = require("../../models/State");

const data = [
  {
    name: "Rondônia",
    abbr: "RO",
  },
  {
    name: "Acre",
    abbr: "AC",
  },
];

class StatesSeeder extends Seeder {
  async shouldRun() {
    return State.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return State.create(data);
  }
}

module.exports = StatesSeeder;
