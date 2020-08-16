const request = require("supertest");
const app = require("../src/app");
const Category = require("../src/models/Category");
const { user, setupDatabase } = require("./fixtures/db");

beforeEach(async () => {
  setupDatabase();
  await Category.deleteMany();
});

test("Should create a new category", async () => {
  const response = await request(app)
    .post("/categories")
    .set("Authorization", `Bearer ${user.tokens[0].token}`)
    .send({
      name: "Tecnologia",
    });

  expect(response.status).toEqual(201);
  const category = Category.findById({ _id: response.body._id });
  expect(category).not.toBeNull();

  expect(response.body.name).toBe("Tecnologia");

  expect(response.body).toMatchObject({
    name: response.body.name,
  });
});
