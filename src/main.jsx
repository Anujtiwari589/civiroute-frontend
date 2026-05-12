import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import "./index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>
     <>
      <App />

        <Toaster
          position="top-right"

          toastOptions={{
            duration: 3000,
          
            style: {
              background: "#FFFFFF",
              color: "#0F172A",
              border: "1px solid #E2E8F0",
              borderRadius: "16px",
              padding: "14px 16px",
              boxShadow:
                "0 4px 20px rgba(15,23,42,0.08)",
            },
          
            success: {
              iconTheme: {
                primary: "#16A34A",
                secondary: "#FFFFFF",
              },
            },
          
            error: {
              iconTheme: {
                primary: "#DC2626",
                secondary: "#FFFFFF",
              },
            },
          }}
        />
      </>
    </BrowserRouter>

  </React.StrictMode>
);