import { useRecoilValue } from "recoil"
import { Loading } from "./Global/GlobalVar"
import { Skeleton } from "./ui/skeleton";

export function SideHeader() {
    const load = useRecoilValue(Loading);

    if (load) {
        return (
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[300px] w-[150px] rounded-xl" />
               
            </div>
        );
    }

    return (<>
    <div className=" flex flex-col space-y-3">

    </div>
    
    
    
    </>);
}
