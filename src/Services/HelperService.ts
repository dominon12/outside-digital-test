/**
 * Generates an array of numbers
 * from 0 to specified length.
 *
 * @export
 * @param {number} length - array length
 * @return {*}  {number[]} - result array
 */
export function arrayFromNumber(length: number): number[] {
  return Array.from(Array(length).keys());
}

/**
 * Formats passed number
 * with spaces.
 *
 * @export
 * @param {number} num - number to format
 * @return {*} {string} - result
 */
export function formatNumberWithSpaces(num: number): string {
  const parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

/**
 * Returns correct case ending
 * for ordinal numbers from 1 to 25,
 *
 * @export
 * @param {number} num
 * @return {*}  {string}
 */
export function getFormattedNumberCaseEnding(num: number): string {
  let result = "ый";

  const caseMapping = [
    {
      ending: "ой",
      numbers: [2, 6, 7, 8],
    },
    {
      ending: "ий",
      numbers: [3, 23],
    },
  ];

  caseMapping.forEach((caseMap) => {
    if (caseMap.numbers.includes(num)) {
      result = caseMap.ending;
    }
  });

  return result;
}
