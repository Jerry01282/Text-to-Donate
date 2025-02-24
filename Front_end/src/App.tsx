import { BrowserRouter as Router } from "react-router-dom";
import CampaignForm from "./components/CampaignForm/CampaignForm";
import StatusMessage from "./components/Status/StatusMessage";
import {useState} from "react";
import './App.css';

function App() {
  const [status, setStatus] = useState<boolean>(false);
  const [messageStatus, setMessageStatus] = useState<boolean>(false);

  return (
    <Router>
      <div className={`container ${status ? 'background-blur' : ''}`}>
        <h1>Text to Donate Campaign</h1>
        <p className="text">This is a form to create a text-to-donate campaign. Enter a unique code and an existing donation form link.</p>
        <CampaignForm messageStatusChange={setMessageStatus} onChange={setStatus}/>
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
