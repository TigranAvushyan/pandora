import { countSymbols } from "./count-symbols";

describe("countSymbols function", () => {
  it("should count single symbol in a string", () => {
    expect(countSymbols("hello", "l")).toBe(2);
  });

  it("should count multiple occurrences of a symbol in a string", () => {
    expect(countSymbols("aaaabbbcc", "a")).toBe(4);
  });

  it("should count symbol at the beginning and end of a string", () => {
    expect(countSymbols("abba", "a")).toBe(2);
  });

  it("should count symbol in an empty string", () => {
    expect(countSymbols("", "a")).toBe(0);
  });

  it("should count symbol that is not present in the string", () => {
    expect(countSymbols("hello", "x")).toBe(0);
  });

  it("should count symbol with different casing", () => {
    expect(countSymbols("Hello", "l")).toBe(2);
    expect(countSymbols("Hello", "L")).toBe(0);
  });

  it("should throw an error for invalid symbol", () => {
    expect(() => countSymbols("hello", "ab")).toThrow();
    expect(() => countSymbols("hello", "")).toThrow();
  });
});
