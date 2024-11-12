import { Container } from "@radix-ui/themes"
import { Button } from "./ui/button"
import { SwapBox } from "./Swapbox"
import coin from '../assets/DEX.png'

export function SwapPage(){
    return(
        <>
        <div className=" m-3 flex flex-col items-center justify-center">
            <div className="flex flex-row size-full justify-around ">
                <div className="place-content-center">
                
                      <div className="text-white font-Content">
                        Buy
                      </div>
                      
                </div>
                <div className=" ">
                    <div className="text-white font-Content">
                
                        0.5%
                    </div>
                  
                        
                </div>
            </div>
          {/* Card */}


          <Container  className="bg-gray-800 shadow-box size-10/12 rounded-lg p-5 ">
          <SwapBox coins="SDOGE" title="From" Icon={coin}/>
          
           <SwapBox coins="TAPES" title="To" Icon={coin}/>
            <div className="rounded bg-gray-600 mb-3">
            Alert
            </div>
            <div className="">
            <Button>Swap</Button>
            </div>
            

          </Container>
           </div>
          
          
         
        
        </>
    )
}