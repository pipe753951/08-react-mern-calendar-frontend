import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { StoreRootState } from "../store/store";

const useStoreSelector: TypedUseSelectorHook<StoreRootState> = useSelector;

export default useStoreSelector;
