import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Chat from "./Chat";
import "./index.css";

const App = () => <div><Chat /></div>;

ReactDOM.render(<App />, document.getElementById("app"));
