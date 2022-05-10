import randomName from "../../wrapper.mjs";

describe("Import default module", () => {
    it("is a function", () => {
        expect(typeof randomName).toBe("function");
    });

    it("works as expected", () => {
        expect(randomName("42", 8)).toBe(34);
    });
});
