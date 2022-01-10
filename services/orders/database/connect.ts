import mongoose from "mongoose";
import { defaultConfig } from "../../common/orders.config";
import { log } from "../../common/logger";

export const connect = () => {
  const { dbUrl } = defaultConfig;

  return mongoose
    .connect(dbUrl)
    .then(() => {
      log.info("Orders database connected");
    })
    .catch(error => {
      log.error("db error", error);
      process.exit(1);
    });
};
