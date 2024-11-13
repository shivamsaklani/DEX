
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './ui/button';
import ThemeToggle from './DarkMode';
import { NavIcon } from './NavIcon';
export function DSHeader(){
    return(
        <div className=" p-5  w-full items-center flex justify-between">

<div className='flex gap-20'>
<Link to="/home" className='font-logo py-3 text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-black to-blue-500 '>DEX</Link>
            <div className='rounded-3xl py-2 px-3 hidden md:flex  gap-4'>
              <Link className='bg-light' to="/swap"> <NavIcon>Swap</NavIcon> </Link>
              <Link to="portfolio"><NavIcon>Portfolio</NavIcon></Link>
              <Link to="pool"> <NavIcon>Pool</NavIcon></Link> 
               <Link to="send"><NavIcon>Send</NavIcon></Link>
               <Link to="receive"><NavIcon>Receive</NavIcon></Link>



            </div>

</div>
           
                    <div className='flex flex-row items-center gap-3 '>
<ThemeToggle/>
            <div className='flex justify-center gap-4'>

                
                
            
            <Button className='hidden sm:flex'>Connect</Button>
            
            </div>
            

            <div className='sm:hidden flex justify-between'>
                
Menu
            </div>
            
           

        </div>

</div>

    )
}