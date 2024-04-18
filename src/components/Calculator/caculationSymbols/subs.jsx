const numbersArray = [];

const subs = (ev) => {
  const inputSelected = document.querySelector('input[type="number"]');
  const inputValue = inputSelected.value;
  const transformValueToNumber = parseInt(inputValue);

  const h2Result = document.querySelector('.result_text');

  if (!transformValueToNumber == 0) {
    inputSelected.value = '';
    numbersArray.push(transformValueToNumber);
    const subs = numbersArray.reduce((total, num, index) => {
      if (index === 0) {
        return num;
      } else {
        return total - num;
      }
    }, 0);
    h2Result.innerHTML = `RESULT: ${subs}`;
  }

  return inputSelected;
};

export default subs;
