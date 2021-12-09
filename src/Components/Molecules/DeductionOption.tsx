import React from "react";
import { useDispatch } from "react-redux";

import "./DeductionOption.scss";
import CheckBox from "../Atoms/CheckBox";
import {
  formatNumberWithSpaces,
  getFormattedNumberCaseEnding,
} from "../../Services/HelperService";
import { toggleOptionSelected } from "../../Redux/DeductionOptions/Actions";

interface Props {
  optionId: number;
  deductionRate: number;
  year: number;
  checked: boolean;
}

const DeductionOption: React.FC<Props> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const toggleChecked = () => dispatch(toggleOptionSelected(props.optionId));

  const formattedRate = formatNumberWithSpaces(props.deductionRate) + " рублей";
  const formattedBinder = props.year === 2 ? "во" : "в";
  const formattedNumberCaseEnding = getFormattedNumberCaseEnding(props.year);

  return (
    <div onClick={toggleChecked} className="deduction-option">
      <CheckBox checked={props.checked} />
      <span className="deduction-option__label">
        <span className="deduction-option__label_primary">{formattedRate}</span>
        <span className="deduction-option__label_secondary">
          {formattedBinder} {props.year}-{formattedNumberCaseEnding} год
        </span>
      </span>
    </div>
  );
};

export default DeductionOption;
