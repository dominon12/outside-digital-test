import React from "react";

import "./TextButton.scss";

interface Props {
  onClick: () => void;
}

const TextButton: React.FC<Props> = (props): JSX.Element => {
  return (
    <span onClick={props.onClick} className="text-button">
      {props.children}
    </span>
  );
};

export default TextButton;
