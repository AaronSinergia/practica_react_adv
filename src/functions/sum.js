const numbersArray = [];

export const sum = () => {
  const inputSelected = document.querySelector('input[type="number"]');
  const inputValue = inputSelected.value;
  const transformValueToNumber = parseInt(inputValue);

  if (transformValueToNumber !== 0) {
    inputSelected.value = '';
    numbersArray.push(transformValueToNumber);
    const result = numbersArray.reduce((total, num) => total + num, 0);
    const result_btn = document.querySelector('.result_text');
    result_btn.innerHTML = `RESULT: ${result}`;
  }

  // return inputSelected;
};
