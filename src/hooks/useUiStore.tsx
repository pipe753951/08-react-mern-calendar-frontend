import useStoreDispatch from "./useStoreDispatch";
import useStoreSelector from "./useStoreSelector";

import uiSlice from "../store/ui/uiSlice";

const useUiStore = function () {
  const dispatch = useStoreDispatch();
  const { isDateModalOpen } = useStoreSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(uiSlice.actions.openDateModal());
  };

  const closeDateModal = () => {
    dispatch(uiSlice.actions.closeDateModal());
  };

  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal,
  };
};

export default useUiStore;
