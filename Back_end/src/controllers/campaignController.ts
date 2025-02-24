import {Request, Response} from 'express';
import { Campaign } from "../models/Campaign";

export const createCampaign = async (req: Request, res: Response): Promise<void> => {
    const {code, link} = req.body;
    const codeExist = await Campaign.findOne({code});

    if (codeExist) {
        res.status(400).json({message: "Code already exists"});
        return;
    }
    try {
        const newCam = new Campaign({code, link});
        await newCam.save();

        res.status(201).json({message: "Campaign created"});
    } catch(err) {
        res.status(500).json({message: "Error", err});
    }
};

export const modifyCampaign = async (req: Request, res: Response): Promise<void> => {
    const {code, link} = req.body;
    const codeExist = await Campaign.findOne({code});

    if (!codeExist) {
        res.status(400).json({message: "Code not found"});
        return;
    }
    try {
        await Campaign.updateOne({code}, {$set: {link}});

        res.status(201).json({message: "Campaign changed"});
    } catch(err) {
        res.status(500).json({message: "Error: ", err});
    }
};

export const deleteCampaign = async (req: Request, res: Response): Promise<void> => {
    const {code} = req.body;
    const codeExist = await Campaign.findOne({code});

    if (!codeExist) {
        res.status(400).json({message: "Code not found"});
        return;
    }
    try {
        await Campaign.deleteOne({code});
        res.status(200).json({message: "Campaign deleted"});
    } catch(err) {
        res.status(500).json({message: "Error: ", err});
    }
};