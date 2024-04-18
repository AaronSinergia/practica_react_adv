const numbersArray = [];

const mult = (ev) => {
  const inputSelected = document.querySelector('input[type="number"]');
  const inputValue = inputSelected.value;
  const transformValueToNumber = parseInt(inputValue);

  const h2Result = document.querySelector('.result_text');

  if (!transformValueToNumber == 0) {
    inputSelected.value = '';
    numbersArray.push(transformValueToNumber);
    const mult = numbersArray.reduce((total, num, index) => {
      if (index === 0) {
        return num;
      } else {
        return total * num;
      }
    }, 0);
    h2Result.innerHTML = `RESULT: ${mult}`;
  }

  return inputSelected;
};

export default mult;
