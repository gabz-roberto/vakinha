import React from "react-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)