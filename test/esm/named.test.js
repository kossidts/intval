import { intval } from "../../wrapper.mjs";

describe("Imported Module named intval", () => {
    it("is a function", () => {
        expect(typeof intval).toBe("function");
    });

    it("works as expected", () => {
        expect(intval("42", 8)).toBe(34);
    });
});
