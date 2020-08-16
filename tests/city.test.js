const request = require("supertest");
const app = require("../src/app");
const City = require("../src/models/City");
const State = require("../src/models/State");
const { user, setupDatabase } = require("./fixtures/db");

const state = new State({
  name: "Sergipe",
  abbr: "SE",
});

beforeEach(async () => {
  setupDatabase();
  await City.deleteMany();
  await State.deleteMany();
  await state.save();

  await new City({
    name: "Estância",
    stateId: state._id,
  }).save();
  await new City({
    name: "Aracaju",
    stateId: state._id,
  }).save();
});

test("Should get all cities", async () => {
  const response = await request(app)
    .get("/cities")
    .set("Authorization", `Bearer ${user.tokens[0].token}`);

  expect(response.body).toMatchObject([
    {
      name: "Aracaju",
      stateId: {
        name: state.name,
        abbr: state.abbr,
      },
    },
    {
      name: "Estância",
      stateId: {
        name: state.name,
        abbr: state.abbr,
      },
    },
  ]);
});
