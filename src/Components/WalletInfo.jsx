import { useRecoilValue } from "recoil";
import { Loading } from "./Global/GlobalVar";
import { Skeleton } from "./ui/skeleton";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
export function WalletInfo(){
    const wallet=useWallet();
    const [key,setkey]=useState("");
    const load=useRecoilValue(Loading);
    useEffect(
       ()=>{
        if(wallet.publicKey){
            setkey(wallet.publicKey.toBase58());
        }
        else{
            setkey("Select Wallet")
        }
       }
        ,[key]); // can i access ButtonState here ??

    if(load){
        return(
            <div className='m-3 flex justify-between  p-3'>
            <div className='flex flex-col'>
            <Skeleton className="md:h-4 md:w-[250px] h-4 w-[50px]  mb-3" />
            
               <span>
               <Skeleton className="md:h-4 md:w-[200px] h-4 w-[100px]  mb-3" />
               </span>

            </div>
            <div className='flex flex-col'>
            <Skeleton className="md:h-4 md:w-[250px] h-4 w-[100px]  mb-3" />
           
                <span>
                <Skeleton className="md:h-4 md:w-[200px] h-4 w-[50px] " />
                </span>
            </div>
        </div>

        )
    }
    return (
        <div className='m-3 flex justify-between text-Content font-Content  p-3'>
            <div className='flex  flex-col font-Content overflow-hidden text-clip'>
               Wallet Address
               <span className="overflow-hidden text-ellipsis ">
                {key}
               </span>

            </div>
            <div className='flex flex-col text-Content font-Content'>
                Amount
                <span>
                    100
                </span>
            </div>
        </div>
    );
}