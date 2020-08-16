const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/User");
const { setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should sign up a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "teste3",
      email: "teste2@com",
      password: "password",
      type: "PJ",
      cnpj: "128920180219",
      companyName: "decea",
    })
    .expect(201);
});
