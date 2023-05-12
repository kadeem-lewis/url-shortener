import PocketBase from "pocketbase";
import * as dotenv from "dotenv";
dotenv.config();
//
export const pb = new PocketBase("http://127.0.0.1:8090");
const USERNAME = process.env.DB_USERNAME as string;
const PASSWORD = process.env.DB_PASSWORD as string;
const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD);
