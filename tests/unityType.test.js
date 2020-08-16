const request = require("supertest");
const app = require("../src/app");
const UnityType = require("../src/models/UnityType");
const { user, setupDatabase } = require("./fixtures/db");

const unityType1 = new UnityType({
  name: "Conjunto",
  abbr: "CONJ",
});

const unityType2 = new UnityType({
  name: "Metro",
  abbr: "M",
});

beforeEach(async () => {
  setupDatabase();
  await UnityType.deleteMany();
  await unityType1.save();
  await unityType2.save();
});

test("Should get all cities unity types", async () => {
  const response = await request(app)
    .get("/unityTypes")
    .set("Authorization", `Bearer ${user.tokens[0].token}`)
    .expect(200);

  expect(response.body).toEqual([
    {
      _id: unityType1._id,
      name: unityType1.name,
      abbr: unityType1.abbr,
      createdAt: unityType1.createdAt,
      updatedAt: unityType1.updatedAt,
    },
    {
      _id: unityType2._id,
      name: unityType2.name,
      abbr: unityType2.abbr,
      createdAt: unityType2.createdAt,
      updatedAt: unityType2.updatedAt,
    },
  ]);
});
