let displayValue = '';

const calculationSys = () => {
  const inputSelected = document.querySelector('input[type="number"]');
  const inputValue = inputSelected.value;
  const transformValueToNumber = parseInt(inputValue);

  if (!transformValueToNumber == 0) {
    inputSelected.value = '';
    displayValue += transformValueToNumber;
    inputSelected.value = displayValue;
  }
};

export default calculationSys;
