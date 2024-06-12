export const generateRandomPairsArray = (arrayLength: number) => {
  if (arrayLength % 2 !== 0 || arrayLength <= 0) {
    console.error("the length of the array isn't even or less than 0");
    return [];
  }
  const randomPairsArray: number[] = [];
  for (let i = 0; i < arrayLength; i += 2) {
    const randomPair = Math.floor(Math.random() * 100);
    randomPairsArray.push(randomPair);
    randomPairsArray.push(randomPair);
  }
  shuffleArray(randomPairsArray);
  return randomPairsArray;
};

export const shuffleArray = <T>(arr: T[]) => {
  if (arr.length <= 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * (arr.length - 1)) + 1;
    const randomIndexValue = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = randomIndexValue;
  }
  return arr;
};
