const numbersArray = [];

const perc = (ev) => {
  const inputSelected = document.querySelector('input[type="number"]');
  const inputValue = inputSelected.value;
  const transformValueToNumber = parseInt(inputValue);

  const h2Result = document.querySelector('.result_text');

  if (!transformValueToNumber == 0) {
    inputSelected.value = '';
    numbersArray.push(transformValueToNumber);
    const perc = numbersArray.reduce((total, num) => total % num, 0);
    h2Result.innerHTML = `RESULT: ${perc}`;
  }

  return inputSelected;
};

export default perc;
