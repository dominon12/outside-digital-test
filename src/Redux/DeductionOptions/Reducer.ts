import { IDeductionOption } from "./../../Types/SystemTypes";
import { AnyAction } from "redux";

import * as types from "./Types";

const INITIAL_STATE: IDeductionOption[] = [];

const deductionOptionsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case types.ADD_OPTIONS:
      return action.payload;
    case types.TOGGLE_OPTION_SELECTED:
      const optionId = action.payload;
      const optionToUpdate = state.find((option) => option.id === optionId);
      return [
        ...state.filter((option) => option.id !== optionId),
        { ...optionToUpdate, selected: !optionToUpdate?.selected },
      ];
    case types.CLEAR_OPTIONS:
      return [];
    default:
      return state;
  }
};

export default deductionOptionsReducer;
