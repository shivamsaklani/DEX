


import '../App.css';
import { ContentBody } from './ContentBody';
import { DSHeader } from './DesktopHeader';
import { MobileBottom } from './MobileBottom';
import { SideHeader } from './Slideheader';
import { WalletInfo } from './WalletInfo';
export function PageLayout(){
    return(<>


  <div className='bg-pink-300 flex justify-center h-screen flex-col' >

  <div className='m-5  size-11/12 flex flex-col'>
        <div className=' flex '>
        <DSHeader/>

        </div>


        {/* Wallet User Info */}
        <WalletInfo/>


{/* side bar design  */}
        <div className='flex flex-row  m-3  gap-x-2'>


            <div className=' flex  left-0  size-5/12 flex-col columns-8'>
           
                <SideHeader/>

            
                

     
            </div>
            

            <div className='size-full'>
            <ContentBody/>

            </div>
           

        </div>

    
    </div>
    <MobileBottom/>

  </div>
   

   


    

    

    

   
   
    
    
    </>)
}