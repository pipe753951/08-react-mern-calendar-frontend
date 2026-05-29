import { toast } from "sonner";

const showAuthErrorOnUi = (errorMessage: string, errorDescription?: string) => {
  toast.error(errorMessage, { description: errorDescription });
};

export default showAuthErrorOnUi;
