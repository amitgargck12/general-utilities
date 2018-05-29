function emiFundValue(emi, rate, years = 0, months = 0) {
  return emi * emiFundMultiplier(rate, years, months);
}
function emiFundMultiplier(rate, years = 0, months = 0) {
  let monthFraction = rate / 1200;
  let totalMonths = years * 12 + months;
  return (
    (Math.pow(1 + monthFraction, totalMonths) - 1) * (1 + monthFraction) / monthFraction
  );
}
function loanEmi(loan, rate, years = 0, months = 0) {
  let bankMoney = oneTimeFundValue(loan, rate, years, months);
  let fundMultiplier = emiFundMultiplier(rate, years, months - 1) + 1;
  return bankMoney / fundMultiplier;
}
function oneTimeFundValue(investment, rate, years = 0, months = 0) {
  return investment * oneTimeFundMultiplier(rate, years, months);
}
function oneTimeFundMultiplier(rate, years = 0, months = 0) {
  let monthFraction = rate / 1200;
  let totalMonths = years * 12 + months;
  return Math.pow(1 + monthFraction, totalMonths);
}

function intro() {
  console.log('emiFundValue(emi, rate, years = 0, months = 0)');
  console.log('emiFundMultiplier(rate, years = 0, months = 0)');
  console.log('loanEmi(loan, rate, years = 0, months = 0)');
  console.log('oneTimeFundValue(investment, rate, years = 0, months = 0)');
  console.log('oneTimeFundMultiplier(rate, years = 0, months = 0)');
}
intro();

module.exports = {
  emiFundValue: emiFundValue,
  emiFundMultiplier: emiFundMultiplier,
  loanEmi: loanEmi,
  oneTimeFundValue: oneTimeFundValue,
  oneTimeFundMultiplier: oneTimeFundMultiplier
};
