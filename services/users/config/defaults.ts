import { Config } from "./config";

const user = "denis";
const password = "padUserPass";

export const defaultConfig: Config = {
  port: 3000,
  host: "localhost",
  dbUrl: `mongodb+srv://${user}:${password}@cluster0.a7vad.mongodb.net/user?retryWrites=true&w=majority`,
  SALT_WORK_FACTOR: 15,
};
