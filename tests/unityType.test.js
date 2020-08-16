const request = require("supertest");
const app = require("../src/app");
const {
  unityType1,
  unityType2,
  user,
  setupDatabase,
} = require("./fixtures/db");

beforeEach(setupDatabase);

test("Should get all cities unity types", async () => {
  const response = await request(app)
    .get("/unityTypes")
    .set("Authorization", `Bearer ${user.tokens[0].token}`)
    .expect(200);

  expect(response.body).toMatchObject([
    {
      name: unityType1.name,
      abbr: unityType1.abbr,
    },
    {
      name: unityType2.name,
      abbr: unityType2.abbr,
    },
  ]);
});
