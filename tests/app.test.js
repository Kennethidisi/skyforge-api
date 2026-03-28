const request = require("supertest");
const app = require("../src/app");

describe("SkyForge API", () => {
  test("GET / should return running message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
  });

  test("GET /health should return ok status", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("GET /api/info should return app information", async () => {
    const res = await request(app).get("/api/info");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("appName");
    expect(res.body).toHaveProperty("version");
    expect(res.body).toHaveProperty("environment");
  });

  test("GET /api/time should return server time", async () => {
    const res = await request(app).get("/api/time");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("serverTime");
  });
});