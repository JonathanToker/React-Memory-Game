import { randomPairsArray_Type } from "./types";
export const generateRandomPairsArray = (arrayLength: number) => {
  if (arrayLength % 2 !== 0 || arrayLength <= 0) {
    console.error("the length of the array isn't even or less than 0");
    return [];
  }
  const randomPairsArray: randomPairsArray_Type = [];
  for (let i = 0; i < arrayLength; i += 2) {
    let randomPair = Math.floor(Math.random() * 100);
    while (randomPairExistInArr(randomPairsArray, randomPair)) {
      randomPair = Math.floor(Math.random() * 100);
    }
    randomPairsArray.push({
      value: randomPair,
      isSelected: false,
      isInvisble: false,
    });
    randomPairsArray.push({
      value: randomPair,
      isSelected: false,
      isInvisble: false,
    });
  }
  shuffleArray(randomPairsArray);
  return randomPairsArray;
};

export const randomPairExistInArr = (
  arr: randomPairsArray_Type,
  randomPair: number
) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value === randomPair) return true;
  }
  return false;
};

export const shuffleArray = <T>(arr: T[]) => {
  if (arr.length <= 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * (arr.length - 1)) + 1;
    const randomIndexValue = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = randomIndexValue;
  }
  return arr;
};

export const isTheOtherSelectMatching = (arr: randomPairsArray_Type) => {
  const parisSet = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isSelected === true) {
      if (parisSet.has(arr[i].value)) {
        return true;
      }
      parisSet.add(arr[i].value);
    }
  }
  return false;
};
