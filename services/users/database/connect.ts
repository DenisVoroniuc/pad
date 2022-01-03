import mongoose from "mongoose";
import { defaultConfig } from "../config/defaults";
import { log } from "../logger";

export const connect = () => {
  const { dbUrl } = defaultConfig;

  return mongoose
    .connect(dbUrl)
    .then(() => {
      log.info("Database connected");
    })
    .catch(error => {
      log.error("db error", error);
      process.exit(1);
    });
};
