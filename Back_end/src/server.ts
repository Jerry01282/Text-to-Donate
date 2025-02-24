import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import CampaignRouter from "./routes/campaignRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/campaign', CampaignRouter);

mongoose.connect(process.env.MONGO_URL as string)
.then(()=> console.log("Connected to MongoDB"))
.catch((err) => console.log("MongoDB Connection Error: ", err));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});