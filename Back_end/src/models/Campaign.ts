import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
    code: {
        type: String,
        unique: true,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

export const Campaign = mongoose.model("Campaign", campaignSchema);