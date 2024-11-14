export function NavIcon({children}){
    return(
        <div className="hover:bg-Secondary text-TextColor hover:text-Content hover:shadow-lg text-Heading font-Heading px-3 py-3 rounded-md ">
            <div className="flex flex-col">
                
                <div>
                {children}
                </div>
           
            </div>
          

        </div>
    )
}