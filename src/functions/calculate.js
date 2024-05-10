const calculate = () => {
  const inputSelected = document.querySelector('input[type="number"]');
  try {
    const result = eval(displayValue);
    inputSelected.value = result;
    displayValue = result.toString();
  } catch (error) {
    inputSelected.value = 'Error';
  }
};

export default calculate;
