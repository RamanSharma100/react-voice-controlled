import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./button.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  primary?: boolean;
  className?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  faIcon?: IconProp;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  className,
  faIcon,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        className,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {faIcon && <FontAwesomeIcon icon={faIcon} />} {label}
    </button>
  );
};
