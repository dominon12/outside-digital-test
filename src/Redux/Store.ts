import { IDeductionOption } from "./../Types/SystemTypes";
import { createStore, combineReducers } from "redux";

import deductionOptionsReducer from "./DeductionOptions/Reducer";

const rootReducer = combineReducers({
  deductionOptions: deductionOptionsReducer,
});

export const store = createStore(rootReducer);

export interface RootState {
  deductionOptions: IDeductionOption[];
}
