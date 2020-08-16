const request = require("supertest");
const app = require("../src/app");
const { user, setupDatabase } = require("./fixtures/db");
const bcrypt = require("bcryptjs");

beforeEach(setupDatabase);

test("Should sign up/post a new user", async () => {
  const response = await request(app)
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

  expect(response.body).toMatchObject({
    user: {
      name: "teste3",
      email: "teste2@com",
      password: bcrypt.hash("password", 8),
      type: "PJ",
      cnpj: "128920180219",
      companyName: "decea",
    },
  });
});

test("Should get all users", async () => {
  const response = await request(app)
    .get("/users")
    .set("Authorization", `Bearer ${user.tokens[0].token}`);

  expect(response.status).toBe(200);
  /*expect(response.body).toMatchObject({
    _id: user._id,
    name: user.name,
    email: user.email,
    companyName: user.companyName,
    type: user.type,
    cnpj: user.cnpj,
  });*/
});
