import { connection } from "../db.js";

export const ping = async (req, res) => {
    const [result] = await connection.query('SELECT "Pong" AS result');
    res.json(result[0]);
  }