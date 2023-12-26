/** @format */

import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
	res.json({ message: "Hello World" });
});
const PORT = 7000;

app.listen(PORT, () => {
	console.log(`server running on PORT:${PORT}`);
});
