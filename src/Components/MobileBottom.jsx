import { MobileNav } from "./MobileNav";

export function MobileBottom(){
    return(
        <>
        <div className="mb-0 sm:hidden bg-sky-300 justify-center  flex-col">
               <div className="p-3 justify-between flex flex-row">
                <div className="flex flex-row gap-4">
                <MobileNav>
                    Trade
                </MobileNav>

                <MobileNav>
                  Portfolio
                </MobileNav>

                <MobileNav>
                  Send 
                </MobileNav>
                <MobileNav>
                 Receive
                </MobileNav>
                    
                </div>
                
               </div>
        </div>
        
        
        </>
    )
}