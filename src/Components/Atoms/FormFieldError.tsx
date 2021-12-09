import React from "react";

import "./FormFieldError.scss";

const FormFieldError: React.FC = (props): JSX.Element => {
  return <span className="form-field-error">{props.children}</span>;
};

export default FormFieldError;
