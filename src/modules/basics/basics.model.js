import { pool } from "../../config/database.js";

export class BasicsModel {
  static async getAll () {
    const client = await pool.connect();
    try {
      const { rows } = await client.query(
        `SELECT 
        id,
        name,
        type,
        user_id
        FROM basic;`
      )
      return rows
    } finally {
      client.release();
    }
  }
}
