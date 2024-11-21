export function PoolBox(props){
    return (
        <div className="bg-Secondary py-1 px-3 rounded-md flex flex-row">
            <div className="block">
                    <p className="font-Content text-Content">{props.title}</p>
                    <p className="font-Content text-Content">{props.subtitle}</p>

                </div>


        </div>
    )
}