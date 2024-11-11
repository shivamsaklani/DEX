import { useRecoilValue } from "recoil";
import { Loading } from "./Global/GlobalVar";
import { Skeleton } from "./ui/skeleton";

export function WalletInfo(){
    const load=useRecoilValue(Loading);
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
        <div className='m-3 flex justify-between bg-sky-100 p-3'>
            <div className='flex flex-col font-Content'>
               Wallet Address
               <span>
                dklajflaskjdf;laksj
               </span>

            </div>
            <div className='flex flex-col font-Content'>
                Amount
                <span>
                    100
                </span>
            </div>
        </div>
    );
}