const numbersArray = [];

export const sum = () => {
  const inputSelected = document.querySelector('input[type="number"]');
  const inputValue = inputSelected.value;
  const transformValueToNumber = parseInt(inputValue);

  let result;

  if (transformValueToNumber !== 0) {
    inputSelected.value = '';
    numbersArray.push(transformValueToNumber);
    result = numbersArray.reduce((total, num) => total + num, 0);
    return result;
  } else {
    return 0;
  }
};
