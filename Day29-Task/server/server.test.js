import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "./server.js";

describe("GET /api/hello", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/api/hello");

    expect(res.statusCode).toBe(200);

    expect(res.body).toEqual({
      message: "Hello World",
    });
  });
});