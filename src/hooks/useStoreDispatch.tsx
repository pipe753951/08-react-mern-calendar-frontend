import { useDispatch } from "react-redux";
import type { StoreAppDispatch } from "../store/store";

const useStoreDispatch = () => useDispatch<StoreAppDispatch>();

export default useStoreDispatch;
