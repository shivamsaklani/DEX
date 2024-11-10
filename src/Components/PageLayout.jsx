


import '../App.css';
import { ContentBody } from './ContentBody';
import { DSHeader } from './DesktopHeader';
import { MobileBottom } from './MobileBottom';
import { SideHeader } from './Slideheader';
import { WalletInfo } from './WalletInfo';
export function PageLayout(){
    return(<>


  <div className='bg-pink-500 flex justify-center h-screen flex-col' >

  <div className='m-auto  p-5 size-11/12 flex flex-col justify-center'>
        <div className=' flex '>
        <DSHeader/>

        </div>


        {/* Wallet User Info */}
        <WalletInfo/>


{/* side bar design  */}


<div className='bg-sky-500 mx-6 h-screen grid grid-rows-3 grid-flow-col gap-4'>
    <div className=' bg-red-300 rounded-lg row-span-2'>
    <SideHeader/>
    </div>
    <div className='bg-yellow-300 row-span-6 rounded-lg col-span-3 size-full'>
        <ContentBody/>
    </div>


</div>



     
        
       

    
    </div>
    <MobileBottom/>

  </div>
   

   


    

    

    

   
   
    
    
    </>)
}