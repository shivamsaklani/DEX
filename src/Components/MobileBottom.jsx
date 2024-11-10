import { MobileNav } from "./MobileNav";

export function MobileBottom(){
    return(
        <>
        <div className="mb-0  bg-sky-300 justify-center  flex-col">
               <div className="p-5 justify-between flex flex-row">
                <div className="flex flex-row ">
                    <h1>icon</h1>
                    <h2>hi</h2>
                </div>
                <MobileNav>
                    hi
                </MobileNav>
               </div>
        </div>
        
        
        </>
    )
}