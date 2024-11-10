import { useRecoilValue } from "recoil"
import { Loading } from "./Global/GlobalVar"
import { Skeleton } from "./ui/skeleton";
export function SideHeader() {
    const load = useRecoilValue(Loading);

    if (load) {
        return (
            <div className="flex flex-col space-y-3">
                <Skeleton className=" md:h-[300px] md:w-[250px] rounded-xl" />
               
            </div>
        );
    }

    return (<>
    hi
    
    
    </>);
}
