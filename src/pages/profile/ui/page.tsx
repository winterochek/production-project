import { useEffect } from "react";
import { ProfileCard, fetchProfileData, profileReducer } from "../../../entities/profile";
import { useAppDispatch, useAsyncReducer } from "shared/lib/hooks";

export default function Profile() {
   useAsyncReducer('profile', profileReducer);
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchProfileData())
   }, [dispatch])

   return (
      <div>
         <ProfileCard />
      </div>
   );
}
