import React from "react";

import "./Tag.scss";

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  left: string;
  right: string;
}

const Tag: React.FC<Props> = (props): JSX.Element => {
  const toggleIsActive = () => props.setIsActive((prev) => !prev);

  return (
    <span
      onClick={toggleIsActive}
      className={`tag ${props.isActive ? "active" : "inactive"}`}
    >
      <span className="tag__left">{props.left}</span>
      <span className="tag__right">{props.right}</span>
    </span>
  );
};

export default Tag;
