import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import  '@solana/wallet-adapter-react-ui/styles.css';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Theme>
        <RecoilRoot>
          <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
        <App />
        </WalletProvider>
     
        
          </ConnectionProvider>
          
        </RecoilRoot>
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
