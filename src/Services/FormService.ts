import { IValidationOptions } from "./../Types/FormTypes";

/**
 * Validates whether passed
 * value has length more than 0.
 *
 * @param {string} value - value to validate
 * @param {boolean} [validate] - validate or not
 * @return {*}  {(string | undefined)} - error message or undefined
 */
function emptyStringValidator(
  value: string,
  validate?: boolean
): string | undefined {
  if (validate && !value) {
    return "Поле обязательно для заполнения";
  }
}

/**
 * Checks whether passed value
 * is a number.
 *
 * @param {string} value - value to validate
 * @param {boolean} [validate] - validate to not
 * @return {*}  {(string | undefined)} - error message or undefined
 */
function numericValueValidator(
  value: string,
  validate?: boolean
): string | undefined {
  if (validate) {
    const converted = +value;
    if (Number.isNaN(converted)) {
      return "Значение этого поля должно быть числом";
    }
  }
}

/**
 * Validates passed 'value'
 * using different validators depending
 * on 'validationOptions' param.
 *
 * @export
 * @param {string} value - value to validate
 * @param {IValidationOptions} [validationOptions] - validation options
 * @return {*}  {{
 *   isValid: boolean; - indicated whether value successfully passed validation
 *   errors: string[]; - array of error messages
 * }}
 */
export function validateFormField(
  value: string,
  validationOptions?: IValidationOptions
): {
  valid: boolean;
  errors: string[];
} {
  let error;
  let errors: string[] = [];

  // test empty field
  error = emptyStringValidator(value, validationOptions?.notEmpty);
  if (error) errors.push(error);

  // numeric value validation
  error = numericValueValidator(value, validationOptions?.numericValue);
  if (error) errors.push(error);

  return {
    valid: errors.length === 0,
    errors,
  };
}
