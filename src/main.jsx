import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "./store";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={configureStore({})}>
    <React.Fragment>
      <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
