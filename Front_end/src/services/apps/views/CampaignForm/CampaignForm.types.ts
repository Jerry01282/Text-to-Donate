export interface CampaignFormProps {
    deleteStatus: boolean;
    changeDeleteStatus: React.Dispatch<React.SetStateAction<boolean>>;
    onChange: React.Dispatch<React.SetStateAction<boolean>>;
    messageStatusChange: React.Dispatch<React.SetStateAction<boolean>>;
}