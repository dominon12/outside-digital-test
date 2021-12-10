import React from "react";
import { MdDone } from "react-icons/md";

import "./CheckBox.scss";

interface Props {
  checked: boolean;
  disabled?: boolean;
}

const CheckBox: React.FC<Props> = (props): JSX.Element => {
  return (
    <div
      className={`checkbox ${props.checked ? "checked" : "normal"} ${
        props.disabled ? "disabled" : ""
      }`}
    >
      {props.checked && <MdDone className="checkbox__done-icon" />}
    </div>
  );
};

export default CheckBox;
