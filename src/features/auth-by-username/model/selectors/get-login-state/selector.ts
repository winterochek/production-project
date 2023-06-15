import { StateSchema } from "app/providers/store-provider";
import { LoginSchema } from "../../types/login-schema";

const initialValues: LoginSchema = {
    username: '', password: '', error: '', isLoading: false
}

export const getLoginState = (state?: StateSchema) => state?.loginForm || initialValues;