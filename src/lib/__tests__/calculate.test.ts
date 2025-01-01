import { createUTCDate } from "../calculate.js";

describe("createUTCDate", () => {
  it("should create a date in UTC time", () => {
    const date = createUTCDate(2026, 0, 1);
    expect(date.toISOString()).toEqual("2026-01-01T00:00:00.000Z");
  });
});