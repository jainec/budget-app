const request = require("supertest");
const app = require("../src/app");
const State = require("../src/models/State");
const { user, setupDatabase } = require("./fixtures/db");
const mongoose = require("mongoose");

const stateId = new mongoose.Types.ObjectId();

const state = new State({
  _id: stateId,
  name: "Santa Catarina",
  abbr: "SC",
});

beforeEach(async () => {
  setupDatabase();
  await State.deleteMany();
  await state.save();
});

test("Should get all states", async () => {
  const response = await request(app)
    .get("/states")
    .set("Authorization", `Bearer ${user.tokens[0].token}`);

  expect(response.body).toEqual([
    {
      _id: state._id,
      name: state.name,
      abbr: state.abbr,
      createdAt: state.createdAt,
      updatedAt: state.updatedAt,
    },
  ]);
});
