import { Querys } from "./querys";
import { Url } from "../models/Url";

jest.mock("../models/Url", () => ({
  Url: {
    find: jest.fn().mockResolvedValue([
      {
        _id: "123",
        originalUrl: "https://www.google.com",
        shortPath: "random",
      },
      {
        _id: "456",
        originalUrl: "https://www.google.co.uk",
        shortPath: "random",
      },
    ]),
    findById: jest.fn().mockResolvedValue({
      _id: "123",
      originalUrl: "https://www.google.com",
      shortPath: "random",
    }),
  },
}));

describe("Querys", () => {
  describe("url", () => {
    it("should lookup via ID", async () => {
      await Querys.url({}, { id: "5e8f8f8f8f8f8f8f8f8f8f8" });

      expect(Url.findById).toHaveBeenCalledWith("5e8f8f8f8f8f8f8f8f8f8f8");
    });

    it("should return the object", async () => {
      expect(await Querys.url({}, { id: "5e8f8f8f8f8f8f8f8f8f8f8" })).toEqual({
        id: "123",
        originalUrl: "https://www.google.com",
        shortUrl: "https://pbid.io/random",
      });
    });
  });

  describe("urls", () => {
    it("should lookup all URLs", async () => {
      await Querys.urls();

      expect(Url.find).toHaveBeenCalled();
    });

    it("should return all URLs", async () => {
      expect(await Querys.urls()).toEqual([
        {
          id: "123",
          originalUrl: "https://www.google.com",
          shortUrl: "https://pbid.io/random",
        },
        {
          id: "456",
          originalUrl: "https://www.google.co.uk",
          shortUrl: "https://pbid.io/random",
        },
      ]);
    });
  });
});
