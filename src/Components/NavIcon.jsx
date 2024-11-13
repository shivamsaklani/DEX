export function NavIcon({children}){
    return(
        <div className="hover:bg-gray-700 hover:text-white  hover:shadow-lg text-Heading font-Heading px-3 text-slate-50 md:text-black py-3 rounded-md ">
            <div className="flex flex-col">
                
                <div>
                {children}
                </div>
           
            </div>
          

        </div>
    )
}