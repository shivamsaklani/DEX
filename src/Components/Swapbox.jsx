import { Avatar } from "@radix-ui/themes";

export function SwapBox({coins,title,Icon}){
    return (
        <div className='rounded-lg mb-3 shadow-box  bg-gray-700 pt-3'>
            <div className="rounded text-Content justify-around ml-3 font-Content mb-3">
                {title}
    
            </div>

            <div className="rounded-lg justify-between p-10 bg-gray-500  ">
                <div className=" flex rounded-lg font-Content text-Content flex justify-between">
                    <div className="bg-gray-600 flex gap-2 px-3 size-3/12 py-3 rounded-sm">
                        <div className="rounded-full"><img src={Icon}  className="sm:h-10 h-5 sm:w-10 w-5"/></div>
                       
                        <p className="font-Content   text-Content">{coins}</p>
                        <span className="font-Content  text-Content ">V</span>
                        
                     

                    </div>

                    <div className="flex ">
                        <input type="text" className="bg-transparent  border-none text-end"/>
                    </div>
                   

                </div>
            
          
            </div>
      
        </div>
    )
}