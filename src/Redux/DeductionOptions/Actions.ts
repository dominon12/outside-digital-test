import { IDeductionOption } from "./../../Types/SystemTypes";
import * as types from "./Types";

export const addDeductionOptions = (options: IDeductionOption[]) => ({
  type: types.ADD_OPTIONS,
  payload: options,
});

export const toggleOptionSelected = (optionId: number) => ({
  type: types.TOGGLE_OPTION_SELECTED,
  payload: optionId,
});

export const clearOptions = () => ({
  type: types.CLEAR_OPTIONS,
});
