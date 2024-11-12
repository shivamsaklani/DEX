import { Link } from "react-router-dom";
import {  NavIcon } from "./NavIcon";

export function MobileBottom(){
    return(
        <>
        <div className="mb-0 md:hidden bg-body justify-center  flex-col">
               <div className="bg-gray-900 py-2  justify-around flex">
            
               <NavIcon><Link to="/swap">Trade</Link></NavIcon>
               <NavIcon><Link to="/portfolio">Portfolio</Link></NavIcon>
               <NavIcon><Link to="/send">Send</Link></NavIcon>
               <NavIcon><Link to="/receive">Receive</Link></NavIcon>
            
                
               </div>
        </div>
        
        
        </>
    )
}