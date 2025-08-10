document.getElementById('convertButton').addEventListener('click', function() {
  const number = parseInt(document.getElementById('numberInput').value);
  const result = document.getElementById('result');

  if (isNaN(number) || number <= 0 || number >= 4000) {
    result.textContent = "Please enter a number between 1 and 3999.";
    return;
  }

  result.textContent = convertToRoman(number);
});

function convertToRoman(num) {
  const romanMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';
  for (let i = 0; i < romanMap.length; i++) {
    while (num >= romanMap[i].value) {
      result += romanMap[i].numeral;
      num -= romanMap[i].value;
    }
  }
  return result;
}