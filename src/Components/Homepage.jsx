function Homeportion({children}){
    return(
        <>
        <div className="flex size-full">

            {children}

        </div>
        
        </>
    )
}

export function Homepage(){
    return(
        <>
         <Homeportion className="bg-red-500 ">
            <h1>portion 1</h1>
        </Homeportion>
       
        </>
       

    )
}