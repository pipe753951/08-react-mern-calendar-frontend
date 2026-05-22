import useStoreSelector from "./useStoreSelector";

const useCalendarStore = function () {
  const { calendarEvents } = useStoreSelector((state) => state.calendar);

  return { calendarEvents };
};

export default useCalendarStore;
