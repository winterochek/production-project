import { fetchProfileData } from "./model/services/fetch-profile-data/service";
import { profileActions, profileReducer } from "./model/slice/slice";
import { Profile, ProfileSchema } from "./model/types/profile";
import ProfileCard from "./ui/profile-card/component";

// types
export {
    Profile,
    ProfileSchema
}

// reducer and actions
export {
    profileActions,
    profileReducer
}

export {
    fetchProfileData
}

export {
    ProfileCard
}