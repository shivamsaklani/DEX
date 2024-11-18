import { useWallet } from "@solana/wallet-adapter-react";

export function CusButton(){
    const {select,disconnect,connected }=useWallet();
    return(
     <button
     onClick={connected ?disconnect :select}
     >
            {connected?'Disconnect':'Connect'}
     </button>   

    );
}