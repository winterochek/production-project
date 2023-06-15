import { useSelector } from "react-redux";
import { getProfileData,getProfileLoading,getProfileError } from "../../selectors";


export const useProfile = () => {
    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    return {
        profileData,
        isLoading,
        error
    }
}