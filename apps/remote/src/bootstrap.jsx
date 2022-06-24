import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(root);
root.render(
  <StrictMode>
    <BrowserRouter basename="/remote">
      <App />
    </BrowserRouter>
  </StrictMode>
);
