import { Request, Response } from "express";
import Pool from "pg-pool";

const pool = new Pool({
  database: "api4",
  user: "me3",
  password: "password",
  host: "localhost",
  port: 5432,
});

export const getUsers = (req: Request, res: Response) => {
  pool.query("SELECT * FROM users", (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result.rows);
  });
};

export const getUserById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result.rows);
  });
};
