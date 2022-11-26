import fs from "fs/promises";
import sqlite3 from 'sqlite3';

import { DATABASE_PATH, INITIAL_DATABASE_PATH } from "../paths.js";

export async function initialize() {
  await fs.copyFile(INITIAL_DATABASE_PATH, DATABASE_PATH);
  const db = new sqlite3.Database(DATABASE_PATH);
  db.run('create index testindex on betting_ticket(raceId, userId);');
  db.run('create index test2index on odds_item(raceId);');
  db.close();
}
