import App from "component/App";
import React from "react";
import ReactDOM from "react-dom/client";
import AppThemeProvider from "utils/hoc/ThemeProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SongsContextProvider } from "context/songsContext";
import { SongContextProvider } from "context/songContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <SongsContextProvider>
        <SongContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SongContextProvider>
      </SongsContextProvider>
    </AppThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
