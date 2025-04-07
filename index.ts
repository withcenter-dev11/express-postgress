import express, { Request, Response } from "express";
import { getUserById, getUsers } from "./db";

const app = express();

app.use(
  express.static("public", {
    dotfiles: "ignore", // ignore, allow, deny
    etag: false, //etag is mechanism for caching and validating resources
    extensions: ["htm", "html"], //if the file is not found, it will look for the file with these extensions
    index: ["index.html"], // will serve index.html if the user goes to the root of the directory
    maxAge: "1d", //sets the max age of the cache to 1 day
    redirect: false, // express will not redirect users to a directory path by appending a trailing slash / if a pathname is a directory
    setHeaders(res: Response) {
      res.set("x-timestamp", "Date.now:" + Date.now());
    },
  })
);

app.get("/", (req: Request, res: Response) => {
  res.json({ info: "Node.js + TypeScript + Express + PostgreSQL" });
});

app.get("/users", getUsers);

app.get("/users/:id", getUserById);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
