import { getUserAuthData } from "./model/selectors/selector";
import { userReducer, userActions } from "./model/slice/slice";
import { User, UserSchema } from "./model/types/user";

export {
    User, 
    UserSchema
}

export {
    userReducer,
    userActions
}

export {
    getUserAuthData
}