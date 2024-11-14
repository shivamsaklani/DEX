import { PoolBox } from "./PoolBox";

export function Pool(){
    return(
        <>
        <div className="size-full w-100 bg-red-300 scroll-smooth overflow-hidden flex flex-col">
<div className="flex flex-col items-center">
    <div className="block shrink-0 ">
        <div className="flex flex-row items-center justify-around">
            {/* Left Portion */}
            <div className="flex flex-col">
                <p className="font-Content text-Content">Liquidity Pools</p>
                <p className="font-Content text-Content">Earn yield</p>
            </div>

            {/* Right Portion */}
            <div className="flex flex-row">
                <PoolBox/>
                <PoolBox/>
                

            </div>


        </div>

        <div className="flex flex-row items-center">
            
        </div>

    </div>

</div>

{/* Table Content  */}


        </div>
        </>
    )
}