import React, { useState } from "react";

import "./Input.scss";
import FormFieldError from "../Atoms/FormFieldError";
import FormFieldLabel from "../Atoms/FormFieldLabel";
import { IValidationOptions } from "../../Types/FormTypes";
import { validateFormField } from "../../Services/FormService";

interface Props {
  id: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
  validationOptions?: IValidationOptions;
}

const Input: React.FC<Props> = (props): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const [wasTouched, setWasTouched] = useState(false);

  const handleValidation = (nextValue: string) => {
    const { valid, errors: formErrors } = validateFormField(
      nextValue,
      props.validationOptions
    );
    setIsValid(valid);
    setErrors(formErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // set wasTouched
    if (!wasTouched) setWasTouched(true);
    // extract next value
    const { value: nextValue } = e.target;
    // update
    props.setValue(nextValue);
    // validate
    handleValidation(nextValue);
  };

  return (
    <div className="input">
      <FormFieldLabel htmlFor={props.id}>{props.placeholder}</FormFieldLabel>

      <input
        className={`input__input-field ${
          isValid ? (wasTouched ? "valid" : "") : "invalid"
        }`}
        id={props.id}
        type={props.type ?? "text"}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={handleChange}
      />

      {errors.length > 0 &&
        errors.map((error) => <FormFieldError>{error}</FormFieldError>)}
    </div>
  );
};

export default Input;
