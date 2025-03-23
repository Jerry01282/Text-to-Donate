import React, {useState} from 'react';
import axios from 'axios';
import { CampaignFormProps } from './CampaignForm.types';
import './CampaignForm.styles.css';

const CampaignForm: React.FC<CampaignFormProps> = (props) => {
    const {deleteStatus, changeDeleteStatus, messageStatusChange, onChange} = props;
    const SERVER_URL = "http://localhost:5000";
    
    const [code, setCode] = useState<string>("");
    const [link, setLink] = useState<string>("");
    
    const handleDeleteClick = () => {
        changeDeleteStatus((prev) => !prev);
    }

    const campaignCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER_URL}/api/campaign`, {code, link});
            console.log("Campaign created");
            if (response.status === 201) {
                onChange(true);
                messageStatusChange(true);
            } 
        } catch {
            console.error("Error creating campaign. Try Again");
            onChange(true);
            messageStatusChange(false);
        }
    }

    const campaignDelete = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.delete<{success: boolean}>(`${SERVER_URL}/api/campaign`, {
                params: {code},
            });
            if (response.status === 200) {
                onChange(true);
                messageStatusChange(true);
            }
        } catch {
            console.error("Error deleting campaign. Try Again");
            onChange(true);
            messageStatusChange(false);
        }
    }

    return(
        <>
            <form className="form-container"onSubmit={deleteStatus ? campaignDelete : campaignCreate}>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter a Campaign Code"
                    className="form-input"
                    required
                />
                {!deleteStatus && (
                    <>
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Enter Donation Link"
                            className="form-input"
                            required
                        />
                        <button className="form-button" type="submit">Create</button>
                    </>
                )}
                {deleteStatus && (
                    <button className="form-button" type="submit">Delete</button>
                )}
            </form>
            <button className="other-button" onClick={handleDeleteClick}>
                {deleteStatus ? "Create" : "Delete"}
            </button>
        </>
    );
}

export default CampaignForm;