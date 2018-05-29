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
function mutualFundRate(interest, expense) {
  return interest - expense - interest * expense / 100;
}
function mutualFundEmiFundValue(emi, interest, expense, years = 0, months = 0) {
  var rate = mutualFundRate(interest, expense);
  return emiFundValue(emi, rate, years, months);
}
function mutualFundOneTimeFundValue(
  investment,
  interest,
  expense,
  years = 0,
  months = 0
) {
  var rate = mutualFundRate(interest, expense);
  return oneTimeFundValue(investment, rate, years, months);
}

function intro() {
  console.log('emiFundValue(emi, rate, years = 0, months = 0)');
  console.log('emiFundMultiplier(rate, years = 0, months = 0)');
  console.log('loanEmi(loan, rate, years = 0, months = 0)');
  console.log('oneTimeFundValue(investment, rate, years = 0, months = 0)');
  console.log('oneTimeFundMultiplier(rate, years = 0, months = 0)');
  console.log('mutualFundRate(interest, expense)');
  console.log('mutualFundEmiFundValue(emi, interest, expense, years=0, months=0)');
  console.log(
    'mutualFundOneTimeFundValue(investment, interest, expense, years=0, months=0)'
  );
}
intro();

module.exports = {
  emiFundValue: emiFundValue,
  emiFundMultiplier: emiFundMultiplier,
  loanEmi: loanEmi,
  oneTimeFundValue: oneTimeFundValue,
  oneTimeFundMultiplier: oneTimeFundMultiplier,
  mutualFundRate: mutualFundRate,
  mutualFundEmiFundValue: mutualFundEmiFundValue,
  mutualFundOneTimeFundValue: mutualFundOneTimeFundValue
};
