const numConsultants = document.getElementById('numConsultants');
const numConsultantsInput = document.getElementById('numConsultantsInput');
const avgSalary = document.getElementById('avgSalary');
const avgSalaryInput = document.getElementById('avgSalaryInput');
const timeToHire = document.getElementById('timeToHire');
const timeToHireInput = document.getElementById('timeToHireInput');
const avgBillings = document.getElementById('avgBillings');
const avgBillingsInput = document.getElementById('avgBillingsInput');

const costSavings = document.getElementById('costSavings');
const revenueIncreased = document.getElementById('revenueIncreased');
const totalValue = document.getElementById('totalValue');

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calculateResults() {
  const num = parseInt(numConsultants.value);
  const salary = parseFloat(avgSalary.value);
  const time = parseInt(timeToHire.value);
  const billings = parseFloat(avgBillings.value);

  const maxTime = Math.max(24, time);
  const costSave = (maxTime / 24) * num * salary * 0.1;
  const revenueInc = num * billings * 0.1;
  const totalPotential = costSave + revenueInc;

  costSavings.textContent = numberWithCommas(costSave.toFixed(2));
  revenueIncreased.textContent = numberWithCommas(revenueInc.toFixed(2));
  totalValue.textContent = numberWithCommas(totalPotential.toFixed(2));
}

function syncValues(e) {
  const slider = e.target;
  const input = document.getElementById(slider.id + 'Input');
  input.value = slider.value;
  calculateResults();
}

function syncSliders(e) {
  const input = e.target;
  const slider = document.getElementById(input.id.replace('Input', ''));
  slider.value = input.value;
  calculateResults();
}

function updateInputs() {
  numConsultantsInput.value = numConsultants.value;
  avgSalaryInput.value = avgSalary.value;
  timeToHireInput.value = timeToHire.value;
  avgBillingsInput.value = avgBillings.value;
}

[numConsultants, avgSalary, timeToHire, avgBillings].forEach((slider) => {
  slider.addEventListener('input', syncValues);
});

[
  numConsultantsInput,
  avgSalaryInput,
  timeToHireInput,
  avgBillingsInput,
].forEach((input) => {
  input.addEventListener('input', syncSliders);
});

// Initialize
updateInputs();
calculateResults();
