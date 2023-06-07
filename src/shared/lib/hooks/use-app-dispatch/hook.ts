import { AppDispatch } from "app/providers/store-provider";
import { useDispatch } from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch