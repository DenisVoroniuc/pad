import express from "express";
import { createClient } from "redis";
import cors from "cors";
import { defaultConfig } from "../common/gateway.config";
import { log } from "../common/logger";
import { routes } from "./routes";
import { json, urlencoded } from "body-parser";
import timeout from "connect-timeout"
const { port, host } = defaultConfig;

const REDIS_PORT = 6379;

const app = express();

app.use(json());
app.use(cors());
app.use(timeout("30s"))
app.use(urlencoded({ extended: false }));

const redisClient = createClient({ url: "" });

app.listen(port, host, () => {
  log.info(`Gateway server is listening at http://${host}:${port} `);
  routes(app);
});

// process.on("uncaughtException", err => {
//   log.error(err);
// });
