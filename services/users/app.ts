import express from "express";
import { defaultConfig } from "../common/users.config";
import { log } from "../common/logger";
import { connect } from "./database/connect";
import { routes } from "./routes";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import { createTaskManager, validateTaskCounter } from "../common/middleware/validateTaskCounter";
import timeout from "connect-timeout";

const { port, host } = defaultConfig;

const app = express();

const taskCounter = createTaskManager(5);

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(timeout("30s"));
app.use(validateTaskCounter(taskCounter));

app.listen(port, host, () => {
  log.info(`Users server is listening at http://${host}:${port}`);
  connect();

  routes(app);
});
