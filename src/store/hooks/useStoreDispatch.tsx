import { useDispatch } from "react-redux";
import type { StoreAppDispatch } from "../store";

const useStoreDispatch = () => useDispatch<StoreAppDispatch>();

export default useStoreDispatch;
