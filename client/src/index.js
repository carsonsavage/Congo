import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import StateController from "./StateController.js";


ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
            <StateController>
                <App />
            </StateController>
        </CookiesProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
