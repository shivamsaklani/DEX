export function NavIcon({children}){
    return(
        <div className="hover:bg-gray-300 hover:text-black  hover:shadow-lg text-Heading font-Heading px-3 text-slate-50 sm:text-black py-3 rounded-md ">
            <div className="flex flex-col">
                
                <div>
                {children}
                </div>
           
            </div>
          

        </div>
    )
}