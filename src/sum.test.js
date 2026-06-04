import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("debería sumar correctamente", () => {
    expect(sum(2, 3)).toBe(5);
  });
});