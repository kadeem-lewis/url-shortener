import { nanoid } from "nanoid";
import { pb } from "../db/pocketbase.js";

export async function generateUniqueShortUrl() {
  let unique = false;
  let shortUrl;

  while (!unique) {
    shortUrl = nanoid(7);
    const existingRecord = await pb
      .collection("urls")
      .getFirstListItem(`shortened="http://short.est/${shortUrl}"`);

    if (!existingRecord) {
      unique = true;
    }
  }

  return `http://short.est/${shortUrl}`;
}
