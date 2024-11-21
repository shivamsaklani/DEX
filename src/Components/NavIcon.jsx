

export function NavIcon({children}){
    return(
        <div className="hover:bg-gray-700 hover:text-Content   hover:shadow-lg  px-3 text-Heading  py-3 rounded-md ">
            <div className="flex flex-col">
                
                <div>
                    
                    
                {children}
                </div>
           
            </div>
          

        </div>
    )
}