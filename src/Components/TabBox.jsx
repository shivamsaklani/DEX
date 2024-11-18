import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";

export function TabBox({ tab1, tab2, child1, child2 }) {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    return (
        <Tabs
            className="bg-Secondary w-full rounded-lg mb-3 shadow-md"
            value={activeTab}
            onValueChange={handleTabChange}
        >
            {/* Tabs List */}
            <TabsList className="flex justify-center  ">
                <TabsTrigger
                    className={`py-2 size-full rounded-tr-2xl  font-medium ${
                        activeTab === "tab1" ? "bg-other text-Content" : "bg-gray-200 text-gray-700"
                    }`}
                    value="tab1"
                >
                    {tab1}
                </TabsTrigger>
                <TabsTrigger
                    className={` py-2 size-full rounded-tl-2xl font-medium ${
                        activeTab === "tab2" ? "bg-other text-Content" : "bg-gray-200 text-gray-700"
                    }`}
                    value="tab2"
                >
                    {tab2}
                </TabsTrigger>
            </TabsList>
            
            {/* Tabs Content */}
            <div className="p-6 rounded-b-md bg-other text-gray-900">
                <TabsContent
                    className="flex justify-center items-center w-full"
                    value="tab1"
                >
                    {child1}
                </TabsContent>
                <TabsContent
                    className="flex justify-center items-center w-full"
                    value="tab2"
                >
                    {child2}
                </TabsContent>
            </div>
        </Tabs>
    );
}
