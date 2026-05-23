import type { ComponentProps } from "react";

const FloatingActionButton = function ({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={`btn btn-primary floating-action-button ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default FloatingActionButton;
