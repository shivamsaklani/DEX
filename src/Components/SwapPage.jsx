import { Container } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { SwapBox } from "./Swapbox";
import coin from '../assets/DEX.png';

export function SwapPage() {
    return (
        <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            {/* Header Section */}
            <div className="flex w-full max-w-md justify-between mb-5">
                <div className="text-white font-Content text-lg">
                    Buy
                </div>
                <div className="text-white font-Content text-lg">
                    0.5%
                </div>
            </div>

            {/* Card Section */}
            <Container className="bg-Secondary shadow-mainbox w-full max-w-md rounded-lg p-3 space-y-4">
                <SwapBox coins="SDOGE" title="From" Icon={coin} />
                <div className="justify-center flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="bg-other  h-10 w-10 rounded-full p-2 shadow-md hover:shadow-purple-500 hover:cursor-pointer " stroke-width="1.5" stroke="currentColor" class="size-6">
  <path className="text-Content" stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg>


                    </div>
                <SwapBox coins="TAPES" title="To" Icon={coin} />

                {/* Alert Message */}
                <div className="rounded  hidden bg-gray-600 mb-3  text-white text-center p-3">
                    Alert
                </div>

                {/* Swap Button */}
                <div className="flex justify-center">
                    <Button>Swap</Button>
                </div>
            </Container>
       </div>
        </div>
    );
}
