import { TabBox } from "./TabBox";

export function Portfolio() {
    return (
        <>
            <div className="flex flex-col ">
                {/* Header */}
                <div className=" text-white p-4 text-lg font-semibold w-full">
                    Portfolio
                </div>
                
                {/* Main Content */}
                <div className="flex flex-col bg-gray-300 p-6  rounded-lg">
                    {/* Overview Section */}
                    <div className="flex flex-col ">
                        <h2 className="text-xl font-medium">Overview</h2>
                        <p className="text-gray-700">Your financial portfolio overview and asset allocation.</p>
                    </div>

                    {/* Tabs Section */}
                    <div className="flex flex-col ">
                        {/* Portfolio and Assets Tab */}
                        <TabBox 
                            tab1="Portfolio" 
                            tab2="Assets" 
                            child1={<h1 className="text-2xl font-semibold">Portfolio</h1>} 
                            child2={<h2 className="text-2xl font-semibold">Assets</h2>} 
                        />

                        {/* Pool and Assets Tab */}
                        <TabBox 
                            tab1="Pool" 
                            tab2="Assets" 
                            child1={<h1 className="text-2xl font-semibold">Pool</h1>} 
                            child2={<h1 className="text-2xl font-semibold">Assets</h1>} 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
