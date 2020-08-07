const mongoose = require("mongoose");
const UnityTypes = require("./src/database/seeders/unity-types.seeder");
const States = require("./src/database/seeders/states.seeder");
const Cities = require("./src/database/seeders/cities.seeder");

const mongoURL = process.env.MONGO_URL || "mongodb://localhost/budget-app";

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
seedersList = {
  UnityTypes,
  States,
  Cities,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase();

module.exports = {
  seedersList,
  connect,
  dropdb,
};
