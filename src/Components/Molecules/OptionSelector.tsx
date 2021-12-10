import React from "react";

import "./OptionSelector.scss";
import Tag from "../Atoms/Tag";

export interface IOption {
  id: string;
  name: string;
}

interface Props {
  title: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  options: IOption[];
  className?: string;
}

const OptionSelector: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className={`option-selector ${props.className ?? ""}`}>
      <span className="option-selector__text">{props.title}</span>
      <div className="option-selector__container">
        {props.options.map((option) => (
          <div key={option.id} className="option-selector__option">
            <Tag
              id={option.id}
              selected={props.selected}
              setSelected={props.setSelected}
              left={option.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;
