import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Chat from "./Chat";
import "./index.css";


const App = () => {
    return (
        <div>
            <div className="heading-container">
                <div className="heading"> Live Chat Room</div>
            </div>
            <div style={{ marginTop: 90, marginBottom: 50 }}>
                <Chat />
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("app"));
