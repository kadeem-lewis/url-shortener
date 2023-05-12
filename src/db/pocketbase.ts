import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");
const authData = await pb.admins.authWithPassword(
  "email@kadeemlewis.com",
  "JH7wd8VX5ShY3BhD6h*#A6%LQ"
);
