import { Link } from "react-router-dom";
import "../App.css";
import ThemeToggle from "./DarkMode";
import { NavIcon } from "./NavIcon";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
export function 
DSHeader() {
  return (
    <div className=" p-5 mt-3 relative sm:mt-0  w-full flex justify-between">
      <div className="flex gap-20">
        <Link
          to="/home"
          className="font-logo py-3 text-4xl bg-clip-text text-transparent bg-gradient-to-br from-red-300 via-gray-500 to-blue-500 "
        >
          DEX
        </Link>
        <div className="rounded-3xl py-2 px-3 hidden md:flex  text-Content gap-4">
          <Link to="/swap">
            {" "}
            <NavIcon>Swap</NavIcon>{" "}
          </Link>
          <Link to="portfolio">
            <NavIcon>Portfolio</NavIcon>
          </Link>
          <Link to="pool">
            {" "}
            <NavIcon>Pool</NavIcon>
          </Link>
          <Link to="send">
            <NavIcon>Send</NavIcon>
          </Link>
          <Link to="receive">
            <NavIcon>Receive</NavIcon>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3 ">
        <ThemeToggle />
        <div className="flex justify-center gap-4">
          <WalletModalProvider>
            <WalletMultiButton />
          </WalletModalProvider>
        </div>

        <div className="sm:hidden text-Content font-Content flex justify-between">Menu</div>
      </div>
    </div>
  );
}
