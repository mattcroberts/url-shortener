import { customAlphabet } from "nanoid";
import { Url } from "../models/Url";
import { ALPHABET, SHORT_URL_LENGTH, DOMAIN } from "../contants";

export const Mutations = {
  createUrl: async (_, args) => {
    const shortPath = customAlphabet(ALPHABET, SHORT_URL_LENGTH)();
    const url = new Url({
      originalUrl: args.url,
      shortPath,
    });
    try {
      await url.save();
    } catch (e) {
      console.error(e);
    }

    return {
      id: url._id,
      shortUrl: `https://${DOMAIN}/${url.shortPath}`,
      originalUrl: url.originalUrl,
    };
  },
};
