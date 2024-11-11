


import '../App.css';
import { ContentBody } from './ContentBody';
import { DSHeader } from './DesktopHeader';
import { MobileBottom } from './MobileBottom';
import { WalletInfo } from './WalletInfo';
export function PageLayout(){
    return(<>


  <div className='bg-gradient-to-b from-sky-700 to-[#0097b2] flex justify-center h-screen flex-col' >

  <div className='mb-3 mx-auto size-11/12 flex flex-col justify-center'>
        <div className=' flex '>
        <DSHeader/>

        </div>


        {/* Wallet User Info */}
        <WalletInfo/>


{/* side bar design  */}


<div className=' mx-6 h-screen grid grid-rows-3 grid-flow-col gap-4'>
    
    <div className=' row-span-6 rounded-lg col-span-3 size-full'>
        <ContentBody/>
    </div>


</div>



     
        
       

    
    </div>
    <MobileBottom/>

  </div>
   

   


    

    

    

   
   
    
    
    </>)
}