import mongoose from "mongoose";

export const Url = mongoose.model(
  "Url",
  new mongoose.Schema({
    originalUrl: String,
    shortPath: { type: String, unique: true },
  })
);
