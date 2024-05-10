const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', calculateBMI);

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = 'Please enter valid weight and height values.';
    return;
  }

  const bmi = weight / (height * height);
  let bmiCategory;

  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obese';
  }

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} which falls into the ${bmiCategory} category.`;
}