/** @format */

import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();

async function connectToMongoDB() {
	try {
		await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {} as ConnectOptions);
		console.log("Database Connected Successfully ");
	} catch (error) {
		console.error("Error Connecting to the Database:", error);
	}
}

// Call the async function
connectToMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
	res.json({ message: "Hello World this is frontend" });
});
app.get("/api/test", async (req: Request, res: Response) => {
	res.json({ message: "Hello World" });
});
const PORT = 7000;

app.listen(PORT, () => {
	console.log(`server running on PORT:${PORT}`);
});
