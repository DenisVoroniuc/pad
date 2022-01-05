import express from "express";
import { createClient } from "redis";
import cors from "cors";
import { defaultConfig } from "../common/gateway.config";
import { log } from "../common/logger";
import { routes } from "./routes";
const { port, host } = defaultConfig;

const REDIS_PORT = 6379;

const app = express();

app.use(cors());

const redisClient = createClient({ url: "" });

app.listen(port, host, () => {
  log.info(`Gateway server is listening at http://${host}:${port} `);
  routes(app);
});

process.on("uncaughtException", err => {
  log.error(err);
});
