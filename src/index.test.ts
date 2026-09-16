import { describe, it, expect } from "vitest";
import { is67 } from "./index.js";

describe("is67", () => {
  it("returns true for 67", () => {
    expect(is67(67)).toBe(true);
    expect(is67(67.0)).toBe(true);
  });

  it("rejects impostors", () => {
    expect(is67(68)).toBe(false);
    expect(is67("67")).toBe(false);
    expect(is67(66.9999)).toBe(false);
    expect(is67(true)).toBe(false);
  });
});
