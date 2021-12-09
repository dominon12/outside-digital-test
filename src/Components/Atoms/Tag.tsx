import React from "react";

import "./Tag.scss";

interface Props {
  id: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  left: string;
  right?: string;
}

const Tag: React.FC<Props> = (props): JSX.Element => {
  const isSelected = props.id === props.selected;

  const toggleIsActive = () => {
    if (isSelected) {
      props.setSelected("");
    } else {
      props.setSelected(props.id);
    }
  };

  return (
    <span
      onClick={toggleIsActive}
      className={`tag ${isSelected ? "active" : "inactive"}`}
    >
      <span className="tag__left">{props.left}</span>
      {props.right && <span className="tag__right">{props.right}</span>}
    </span>
  );
};

export default Tag;
