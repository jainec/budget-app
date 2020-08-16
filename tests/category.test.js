const request = require("supertest");
const app = require("../src/app");
const { category1, category2, user, setupDatabase } = require("./fixtures/db");
const Category = require("../src/models/Category");

beforeEach(setupDatabase);

test("Should get all categories", async () => {
  const response = await request(app)
    .get("/categories")
    .set("Authorization", `Bearer ${user.tokens[0].token}`);

  expect(response.body).toMatchObject([
    {
      name: category2.name,
    },
    {
      name: category1.name,
    },
  ]);
});

test("Should get a category", async () => {
  const response = await request(app)
    .get(`/categories/${category1._id}`)
    .set("Authorization", `Bearer ${user.tokens[0].token}`);

  expect(response.body).toMatchObject({
    name: category1.name,
  });
});

test("Should post a category", async () => {
  const response = await request(app)
    .post("/categories")
    .set("Authorization", `Bearer ${user.tokens[0].token}`)
    .send({
      name: "Eletrônicos",
    });

  expect(response.status).toBe(201);
  expect(response.body).toEqual({
    _id: response.body._id,
    name: response.body.name,
  });
});

test("Should update a category", async () => {
  const response = await request(app)
    .patch(`/categories/${category1._id}`)
    .set("Authorization", `Bearer ${user.tokens[0].token}`)
    .send({
      name: "Nova",
    });

  expect(response.status).toBe(200);
  const updatedCategory = await Category.findById(response.body._id);
  expect(updatedCategory.name).toEqual("Nova");
});

test("Should delete a category", async () => {
  const response = await request(app)
    .delete(`/categories/${category1._id}`)
    .set("Authorization", `Bearer ${user.tokens[0].token}`);

  expect(response.status).toBe(200);
  const updatedCategory = await Category.findById(response.body._id);
  expect(updatedCategory).toBeNull();
});
