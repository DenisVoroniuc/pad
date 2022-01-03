import express from "express";
import { defaultConfig } from "./config/defaults";
import { log } from "./logger";
import { connect } from "./database/connect";
import { routes } from "./routes";
import { json, urlencoded } from "body-parser";

const { port, host } = defaultConfig;

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listening at http://${host}:${port} `);
  connect();
  routes(app);
});
