import type { ComponentProps } from "react";

type FloatingActionButtonSize = "sm" | "normal";
type FloatingActionButtonVariant = "primary" | "danger";

interface FloatingActionButtonProps extends ComponentProps<"div"> {
  size?: FloatingActionButtonSize;
  variant?: FloatingActionButtonVariant;
}

const FloatingActionButtonSizeClassNames: Record<
  FloatingActionButtonSize,
  string
> = {
  sm: "floating-action-button-sm",
  normal: "",
};

const FloatingActionButtonVariantClassNames: Record<
  FloatingActionButtonVariant,
  string
> = {
  primary: "btn-primary",
  danger: "btn-danger",
};

const FloatingActionButton = function (props: FloatingActionButtonProps) {
  const {
    //* Component own props.
    variant = "primary",
    size = "normal",

    //* Div component element props.
    children,
    className,
    ...remainingProps
  } = props;

  return (
    <div
      className={`btn ${FloatingActionButtonVariantClassNames[variant]} floating-action-button ${FloatingActionButtonSizeClassNames[size]} ${className}`}
      {...remainingProps}
    >
      {children}
    </div>
  );
};

export default FloatingActionButton;
