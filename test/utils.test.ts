import { tsIntersectionOf } from "../src/utils";

describe("tsIntersectionOf", () => {
  const tests: [string, string[], string][] = [
    ["identity for single type", ["string"], "string"],
    ["basic intersection", ["string", "number"], "string & number"],
    ["filter out unknown", ["string", "number", "unknown"], "string & number"],
    ["identity for unknown type", ["unknown"], "unknown"],
    ["unknown for no types passed", [], "unknown"],
    ["parentheses around types with union", ["4", `string | number`], "4 & (string | number)"],
    [
      "parentheses around types with intersection",
      ["{ red: string }", "{ blue: string } & { green: string }"],
      "{ red: string } & ({ blue: string } & { green: string })",
    ],
  ];

  tests.forEach(([name, input, output]) => {
    test(name, () => {
      expect(tsIntersectionOf(...input)).toBe(output);
    });
  });
});
