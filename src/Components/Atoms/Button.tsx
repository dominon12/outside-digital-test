import React from "react";

import "./Button.scss";

interface Props {
  onClick: () => void;
  style: "big" | "small";
  outline?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props): JSX.Element => {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props.style} ${props.outline ? "outline" : ""}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
