const { Seeder } = require("mongoose-data-seed");
const Category = require("../../models/Category");

const data = [
  {
    name: "Tecnologia",
  },
  {
    name: "Casa",
  },
  {
    name: "Esporte",
  },
  {
    name: "Eletrônicos",
  },
  {
    name: "Bebê",
  },
  {
    name: "Carro",
  },
];

class CategoriesSeeder extends Seeder {
  async shouldRun() {
    return Category.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Category.create(data);
  }
}

module.exports = CategoriesSeeder;
