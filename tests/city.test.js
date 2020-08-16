const request = require("supertest");
const app = require("../src/app");
const City = require("../src/models/City");
const State = require("../src/models/State");
const { city1, city2, state, user, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should get all cities", async () => {
  const response = await request(app)
    .get("/cities")
    .set("Authorization", `Bearer ${user.tokens[0].token}`);

  expect(response.body).toMatchObject([
    {
      name: city1.name,
      stateId: {
        name: state.name,
        abbr: state.abbr,
      },
    },
    {
      name: city2.name,
      stateId: {
        name: state.name,
        abbr: state.abbr,
      },
    },
  ]);
});
