import { intval } from "../../wrapper.mjs";

describe("Import named module", () => {
    it("is a function", () => {
        expect(typeof intval).toBe("function");
    });

    it("works as expected", () => {
        expect(intval("42", 8)).toBe(34);
    });
});
