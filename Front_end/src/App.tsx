import { BrowserRouter as Router } from "react-router-dom";
import CampaignForm from "./services/apps/views/CampaignForm/CampaignForm";
import StatusMessage from "./services/apps/views/Status/StatusMessage";
import {useState} from "react";
import './App.css';

function App() {
  const [status, setStatus] = useState<boolean>(false);
  const [messageStatus, setMessageStatus] = useState<boolean>(false);
  const [deleteForm, setDeleteForm] = useState<boolean>(false);
  
  const campaignFormProps = {
    deleteStatus: deleteForm,
    changeDeleteStatus: setDeleteForm,
    messageStatusChange: setMessageStatus,
    onChange: setStatus,
  };

  return (
    <Router>
      <div className={`container ${status ? 'background-blur' : ''}`}>
        <h1>Text to Donate Campaign</h1>
        {!deleteForm && (<p className="text">This is a form to create a text-to-donate campaign. Enter a unique code and an existing donation form link.</p>)}
        <CampaignForm {...campaignFormProps}/>
      </div>
      {status && (
          <div className="modal-overlay">
            <StatusMessage status={messageStatus} onChange={setStatus}/>
          </div>
      )}
    </Router>
  )
}

export default App
