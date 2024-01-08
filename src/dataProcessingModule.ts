/**
 * 任務：實作一個函式 `sortArray`，將數字陣列由小到大排序。
 *
 * 範例：
 * sortArray([3, 1, 4]) 應該回傳 [1, 3, 4]
 *
 * @param numbers - 一個數字陣列
 * @returns - 回傳一個數字陣列，表示排序後的結果
 */
export function sortArray(numbers: number[]): number[] {
  const length = numbers.length;

  for (let i = 0; i < length; i++) {
    let min = numbers[i];
    let minIndex = i;

    for (let j = i; j < length; j++) {
      if (numbers[j] < min) {
        min = numbers[j];
        minIndex = j;
      }
    }
    [numbers[minIndex], numbers[i]] = [numbers[i], numbers[minIndex]];
  }
  return numbers;
}

/**
 * 任務：實作一個函式 `filterArray`，過濾數字陣列中符合條件的元素。
 *
 * 範例：
 * filterArray([1, 2, 3, 4], num => num % 2 === 0) 應該回傳 [2, 4]
 *
 * @param numbers - 一個數字陣列
 * @param predicate - 一個函式，用來判斷元素是否符合條件
 * @returns - 回傳一個數字陣列，表示過濾後的結果
 */
export function filterArray(
  numbers: number[],
  predicate: (num: number) => boolean
): number[] {
  // 請在此處寫下你的程式碼
  let result: number[] = [];
  numbers.forEach((n) => {
    if (predicate(n)) result.push(n);
  });
  return result;
}

/**
 * 任務：實作一個函式 `transformArray`，將數字陣列中的每個元素進行轉換。
 *
 * 範例：
 * transformArray([1, 2, 3], num => num * 2) 應該回傳 [2, 4, 6]
 *
 * @param numbers - 一個數字陣列
 * @param transform - 一個函式，用來轉換元素
 * @returns - 回傳一個數字陣列，表示轉換後的結果
 */
export function transformArray(
  numbers: number[],
  transform: (num: number) => number
): number[] {
  // 請在此處寫下你的程式碼
  let result: number[] = [];
  numbers.forEach((n) => {
    result.push(transform(n));
  });
  return result;
}
