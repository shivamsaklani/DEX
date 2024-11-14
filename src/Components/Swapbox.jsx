

export function SwapBox({ coins, title, Icon}) {
    return (
        <div className=' rounded-lg mb-3  p-5'>
            <div className="text-start font-Content mb-3 text-TextColor">
                {title}
            </div>

            <div className="rounded-lg p-5 bg-gray-500 flex  flex-col gap-4 items-center">
                <div className="flex items-center justify-between w-full ">
                    <div className="flex items-center gap-1 bg-Secondary shadow-box p-3 rounded-sm">
                        <img src={Icon} className="rounded-full w-5" alt="Icon" />
                        <p className="font-Content text-TextColor">{coins}</p>
                        <span className="font-Content text-TextColor">V</span>
                    </div>

                   

                    <div className="flex items-center rounded-lg gap-2 ">
                        <input
                            type="text"
                            className="bg-transparent text-end w-full p-2  border-none outline-none text-Content font-Content "
                            placeholder="0.00"
                        />
                        <span className="text-Content font-Content">$</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
