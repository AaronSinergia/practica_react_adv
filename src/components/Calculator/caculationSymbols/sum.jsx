const numbersArray = [];

const sum = (ev) => {
  const inputSelected = document.querySelector('input[type="number"]');
  const inputValue = inputSelected.value;
  const transformValueToNumber = parseInt(inputValue);

  const h2Result = document.querySelector('.result_text');

  if (!transformValueToNumber == 0) {
    inputSelected.value = '';
    numbersArray.push(transformValueToNumber);
    const sum = numbersArray.reduce((total, num) => total + num, 0);
    h2Result.innerHTML = `RESULT: ${sum}`;
  }

  return inputSelected;
};

export default sum;
