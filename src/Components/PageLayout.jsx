


import '../App.css';
import { ContentBody } from './ContentBody';
import { DSHeader } from './DesktopHeader';
import { MobileBottom } from './MobileBottom';
import { WalletInfo } from './WalletInfo';
export function PageLayout(){
    return(<>


  <div className='bg-gradient-to-bl from-teal-500 from-20% via-[#0097b2] via-50% dark:bg-black flex justify-center h-screen flex-col' >

  <div className='mb-3 mx-auto size-11/12 flex flex-col justify-center'>
        <div className=' flex '>
        <DSHeader/>

        </div>


        {/* Wallet User Info */}
        <WalletInfo/>


{/* side bar design  */}


<div className='flex h-screen justify-center items-center size-full '>
    
    <div className=' rounded-lg items-center justify-center size-full'>
        <ContentBody/>
    </div>


</div>



     
        
       

    
    </div>
    <div className='justify-center'>
    <MobileBottom/>

    </div>
    

  </div>
   

   


    

    

    

   
   
    
    
    </>)
}