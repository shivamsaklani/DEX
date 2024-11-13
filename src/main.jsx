import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Theme>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
