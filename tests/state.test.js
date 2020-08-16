const request = require("supertest");
const app = require("../src/app");
const State = require("../src/models/State");
const { state, user, setupDatabase } = require("./fixtures/db");
const mongoose = require("mongoose");

beforeEach(setupDatabase);

test("Should get all states", async () => {
  const response = await request(app)
    .get("/states")
    .set("Authorization", `Bearer ${user.tokens[0].token}`);

  expect(response.body).toMatchObject([
    {
      name: state.name,
      abbr: state.abbr,
    },
  ]);
});
