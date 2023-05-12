import { nanoid } from "nanoid";
import { pb } from "../db/pocketbase.js";

export async function generateUniqueShortUrl() {
  let unique = false;
  let shortUrl: any;

  while (!unique) {
    //generate a new uuid based on nanoid
    shortUrl = nanoid(7);
    //check if a shortened url already exists with this id
    const records = await pb.collection("urls").getFullList({
      sort: "-created",
    });
    const existingRecord = records.find(
      (record) => record.shortened === `http://short.est/${shortUrl}`
    );

    //if no record exists with this id then stop the loop and keep id
    if (!existingRecord) {
      unique = true;
    }
  }
  //return the shortened url
  return `http://short.est/${shortUrl}`;
}
