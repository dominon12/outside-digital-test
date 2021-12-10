import React from "react";

import "./DeductionOptionsColumn.scss";
import { IDeductionOption } from "../../Types/SystemTypes";
import DeductionOption from "../Molecules/DeductionOption";
import FormFieldLabel from "../Atoms/FormFieldLabel";

interface Props {
  id: string;
  options: IDeductionOption[];
}

const DeductionOptionsColumn: React.FC<Props> = (props): JSX.Element | null => {
  const sortByYearAsc = (a: IDeductionOption, b: IDeductionOption) =>
    a.year - b.year;

  return props.options.length > 0 ? (
    <div className="deduction-options">
      <FormFieldLabel htmlFor={props.id}>
        Итого можете внести в качестве досрочных:
      </FormFieldLabel>

      <div className="deduction-options__container">
        {props.options.sort(sortByYearAsc).map((option) => (
          <DeductionOption
            key={option.id}
            optionId={option.id}
            deductionRate={option.deduction}
            checked={option.selected}
            year={option.year}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default DeductionOptionsColumn;
