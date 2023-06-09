import { profileReducer } from "entities/profile";
import { useAsyncReducer } from "shared/lib/hooks";

export default function Profile() {
   useAsyncReducer('profile', profileReducer)

   return (
      <div>
         Profile
      </div>
   );
}
