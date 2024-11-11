
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './ui/button';
export function DSHeader(){
    return(
        <div className=" p-5  w-full items-center flex justify-between">

<div className='flex gap-20'>
<h1 className='font-logo text-4xl'>DEX</h1>
            <div className='rounded-3xl py-2 px-3 hidden sm:flex  gap-4'>
               <Link to="/swap">Swap </Link>
               <Link to="portfolio">Portfolio</Link>
               <Link to="pool">Pool</Link>
               <Link to="send">Send</Link>
               <Link to="receive">Receive</Link>



            </div>

</div>
           


            <div className='flex justify-center gap-4'>
            
            <Button className='hidden sm:flex'>Connect</Button>
            </div>

            <div className='sm:hidden flex justify-end'>
Menu
            </div>
            
           

        </div>
    )
}