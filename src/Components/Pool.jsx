import { PoolBox } from "./PoolBox";

export function Pool() {
  return (
    <>
      <div className="size-full w-100 scroll-smooth overflow-hidden flex flex-col">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row mx-3 items-center justify-between">
            {/* Left Portion */}
            <div className="flex flex-col ">
              <p className="font-Content text-Content">Liquidity Pools</p>
              <p className="font-Content text-Content">Earn yield</p>
            </div>

            {/* Right Portion */}
            <div className="flex flex-row gap-4">
              <PoolBox title="TVL" subtitle="$2293" />
              <PoolBox title="TVL" subtitle="$3290"/>
            </div>

            
          </div>

          <div className="flex mx-3 mt-3 flex-row items-center">
              <table className="rounded-lg  bg-green-300  ">
                <thead>
                    <tr className="flex-col">
                    <tr>Pool</tr>
                    <tr>Liquidity</tr>

                    </tr>
                    
                </thead>
              </table>
            </div>
        </div>

        {/* Table Content  */}
      </div>
    </>
  );
}
