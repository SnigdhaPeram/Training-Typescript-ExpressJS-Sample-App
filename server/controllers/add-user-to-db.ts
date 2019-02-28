import { db } from "../db";
import { log } from "../logger";

export const addUserToDb = (req: any, res: any) => {
  const user = req.body;
  log(`fetching user from request`, user);
  log(`adding user to db`, user);
  db.userList.push(user); // replace with mongodb.
  log(`sending add user to client`, user);
  res.json(user);
};
