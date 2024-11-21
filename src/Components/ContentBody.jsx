import { useRecoilValue } from "recoil";
import { Loading } from "./Global/GlobalVar";
import { Skeleton } from "./ui/skeleton";
import { Outlet } from "react-router-dom";

export function ContentBody() {
  const load = useRecoilValue(Loading);

  if (load) {
    return (
      <Skeleton className=" md:h-[100%] md:w-[100%] rounded-xl"></Skeleton>
    );
  }
  return (
    
      <Outlet />
   
  );
}
