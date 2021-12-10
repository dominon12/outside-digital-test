import React from "react";

import './HintText.scss'

interface Props {
  className?: string;
}

const HintText: React.FC<Props> = (props): JSX.Element => {
  return (
    <p className={`hint-text ${props.className ?? ""}`}>{props.children}</p>
  );
};

export default HintText;
