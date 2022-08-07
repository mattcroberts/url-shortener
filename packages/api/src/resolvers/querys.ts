import { Url } from "../models/Url";
import { DOMAIN } from "../contants";

export const Querys = {
  url: async (_, { id }) => {
    try {
      const url = await Url.findById(id);

      return {
        id: url._id,
        originalUrl: url.originalUrl,
        shortUrl: `https://${DOMAIN}/${url.shortPath}`,
      };
    } catch (e) {
      console.error(e);
    }
  },
  urls: async () => {
    try {
      const urls = await Url.find();

      return urls.map((url) => ({
        id: url._id,
        originalUrl: url.originalUrl,
        shortUrl: `https://${DOMAIN}/${url.shortPath}`,
      }));
    } catch (e) {
      console.error(e);
    }
  },
};
