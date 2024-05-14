const numConsultants = document.getElementById('numConsultants');
const avgSalary = document.getElementById('avgSalary');
const timeToHire = document.getElementById('timeToHire');
const avgBillings = document.getElementById('avgBillings');

const numConsultantsVal = document.getElementById('numConsultantsVal');
const avgSalaryVal = document.getElementById('avgSalaryVal');
const timeToHireVal = document.getElementById('timeToHireVal');
const avgBillingsVal = document.getElementById('avgBillingsVal');

const costSavings = document.getElementById('costSavings');
const revenueIncreased = document.getElementById('revenueIncreased');
const totalValue = document.getElementById('totalValue');

function calculateResults() {
  const num = parseInt(numConsultants.value);
  const salary = parseFloat(avgSalary.value);
  const time = parseInt(timeToHire.value);
  const billings = parseFloat(avgBillings.value);

  const maxTime = Math.max(24, time);
  const costSave = (maxTime / 24) * num * salary * 0.1;
  const revenueInc = num * billings * 0.1;
  const totalPotential = costSave + revenueInc;

  costSavings.textContent = costSave.toFixed(2);
  revenueIncreased.textContent = revenueInc.toFixed(2);
  totalValue.textContent = totalPotential.toFixed(2);
}

function updateLabels() {
  numConsultantsVal.textContent = numConsultants.value;
  avgSalaryVal.textContent = `$${avgSalary.value}`;
  timeToHireVal.textContent = timeToHire.value;
  avgBillingsVal.textContent = `$${avgBillings.value}`;
}

[numConsultants, avgSalary, timeToHire, avgBillings].forEach((input) => {
  input.addEventListener('input', () => {
    updateLabels();
    calculateResults();
  });
});

// Initialize
updateLabels();
calculateResults();
