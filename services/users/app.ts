import express from "express";
import { defaultConfig } from "../common/users.config";
import { log } from "../common/logger";
import { connect } from "./database/connect";
import { routes } from "./routes";
import { json, urlencoded } from "body-parser";
import cors from "cors";
const { port, host } = defaultConfig;

const app = express();
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Users server is listening at http://${host}:${port}`);
  connect();
  routes(app);
});

process.on("uncaughtException", err => {
  log.error(err);
});

// production error handler
//@ts-expect-error
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || 500).render("500");
});
