import express from "express";
import { createCampaign, modifyCampaign, deleteCampaign } from "../controllers/campaignController";

const CampaignRouter = express.Router();

CampaignRouter.post("/", createCampaign);
CampaignRouter.put("/", modifyCampaign);
CampaignRouter.delete("/", deleteCampaign);

export default CampaignRouter;