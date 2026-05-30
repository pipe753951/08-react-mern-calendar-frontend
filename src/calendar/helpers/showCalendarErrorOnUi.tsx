import { toast } from "sonner";

const showCalendarErrorOnUi = (
  errorMessage: string,
  errorDescription?: string,
) => {
  toast.error(errorMessage, {
    description: errorDescription,
    position: "bottom-left",
  });
};

export default showCalendarErrorOnUi;
