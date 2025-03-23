import React from "react"
import { StatusMessageProps } from "./StatusMessage.type";
import './StatusMessage.styles.css';

const StatusMessage: React.FC<StatusMessageProps> = ({status, onChange}) => {
    const handleClick = ()=>{
        onChange(false)
    }

    return(
        <div className="status-container">
            {status ? (<h1>Campaign Created</h1>) : (<h1>Failed to Create: Enter a different code</h1>)}
            <p onClick={handleClick}>X</p>
        </div>
    );
}

export default StatusMessage;