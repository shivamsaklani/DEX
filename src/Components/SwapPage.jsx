import { Container } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { SwapBox } from "./Swapbox";
import coin from '../assets/DEX.png';

export function SwapPage() {
    return (
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
            <Container className="bg-Secondary  shadow-mainbox w-full max-w-md rounded-lg p-3 space-y-4">
                <SwapBox coins="SDOGE" title="From" Icon={coin} />
                <div className="justify-center flex items-center">
                        <p className="text-Content">V</p>

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
    );
}
