
import "../App.css";
import { ContentBody } from "./ContentBody";
import { DSHeader } from "./DesktopHeader";

import { MobileBottom } from "./MobileBottom";
import { WalletInfo } from "./WalletInfo";

export function PageLayout() {

  return (
    <>
      
        <div className="bg-Background dark:bg-black flex justify-center h-screen size-full flex-col">
        <div className=" flex ">
              <DSHeader />
            </div>

            <div className="justify-between">
            <WalletInfo />
            </div>
          <div className="mb-3 mx-auto size-11/12 flex flex-col justify-center">
            

  

          
              <div className=" rounded-lg max-w-screen items-center justify-center">
                <ContentBody />
              </div>
            
            
            
          </div>
          <div className="justify-center">
            <MobileBottom />
          </div>
        </div>
  
    </>
  );
}
