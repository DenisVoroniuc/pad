const user = process.env.APP_USERS_USER_DB ?? "denis";
const password = process.env.APP_USERS_PASS_DB ?? "padUserPass";
const port = parseInt(process.env.APP_USERS_PORT ?? "3000");
const host = process.env.APP_USERS_HOST ?? "localhost";

export const defaultConfig = {
  port,
  host,
  dbUrl: `mongodb+srv://${user}:${password}@cluster0.a7vad.mongodb.net/user?retryWrites=true&w=majority`,
  SALT_WORK_FACTOR: 15,
};
