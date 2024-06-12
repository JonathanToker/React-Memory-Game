import { generateRandomPairsArray } from "./utils";
describe("#generateRandomPairsArray", () => {
  describe("pairs array", () => {
    test("should be the given array length", () => {
      const randomTenArr = generateRandomPairsArray(10);
      const random1Arr = generateRandomPairsArray(1);
      expect(randomTenArr.length).toBe(10);
      expect(random1Arr).toStrictEqual([]);
    });
  });
});
