import React from "react";

import "./FormFieldLabel.scss";

interface Props {
  htmlFor: string;
}

const FormFieldLabel: React.FC<Props> = (props): JSX.Element => {
  return (
    <label className="form-field-label" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};

export default FormFieldLabel;
