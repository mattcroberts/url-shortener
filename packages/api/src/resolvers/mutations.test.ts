import { Url } from "../models/Url";
import { Mutations } from "./mutations";

jest.mock("../models/Url");

jest.mock("nanoid", () => ({ customAlphabet: () => () => "random" }));

describe("mutations", () => {
  describe("createUrl", () => {
    it("should save a new Url object", async () => {
      await Mutations.createUrl({}, { url: "https://www.google.com" });
      expect(Url).toHaveBeenCalledWith({
        originalUrl: "https://www.google.com",
        shortPath: expect.any(String),
      });
      expect(Url.prototype.save).toHaveBeenCalled();
    });
  });
});
