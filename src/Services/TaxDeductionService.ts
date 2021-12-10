import { IDeductionOption } from "./../Types/SystemTypes";
import { arrayFromNumber } from "./HelperService";

const yearlyTaxDeductionRate = 0.13;
const maxDeduction = 260000;

/**
 * Calculates deduction for
 * given monthly salary and
 * returns an array of IDeductionOption.
 *
 * @export
 * @param {number} monthlySalary
 * @return {*}  {IDeductionOption[]}
 */
export function calculateDeduction(monthlySalary: number): IDeductionOption[] {
  // calculate deduction per year
  const yearlyDeduction = monthlySalary * 12 * yearlyTaxDeductionRate;
  // calculate number of whole years
  const wholeYears = Math.floor(maxDeduction / yearlyDeduction);
  // calculate rest deduction
  const restDeduction = maxDeduction - yearlyDeduction * wholeYears;
  // combine calculated data in an array
  const resultDeduction: IDeductionOption[] = arrayFromNumber(
    wholeYears + 1
  ).map((_, index) => {
    const lastItem = index === wholeYears;
    const deduction = lastItem ? restDeduction : yearlyDeduction;
    return {
      id: index,
      deduction: Math.ceil(deduction),
      year: index + 1,
      selected: !lastItem,
    };
  });
  return resultDeduction;
}
