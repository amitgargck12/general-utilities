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
function loanRemainingBalance(loan, emi, rate, years = 0, months = 0) {
  let bankMoney = oneTimeFundValue(loan, rate, years, months);
  let fundMultiplier = emiFundMultiplier(rate, years, months - 1) + 1;
  return bankMoney - emi * fundMultiplier;
}
function oneTimeFundValue(investment, rate, years = 0, months = 0) {
  return investment * oneTimeFundMultiplier(rate, years, months);
}
function oneTimeFundMultiplier(rate, years = 0, months = 0) {
  let monthFraction = rate / 1200;
  let totalMonths = years * 12 + months;
  return Math.pow(1 + monthFraction, totalMonths);
}

function Loan(loan, rate) {
  function tenureEmi(years, months) {
    return loanEmi(loan, rate, years, months);
  }
  function remainingBalance(years, months, emi) {
    return loanRemainingBalance(loan, emi, rate, years, months);
  }
  function printOptions() {
    console.log('tenureEmi(years, months)');
    console.log('remainingBalance(years, months, emi)');
    console.log('options');
  }
  printOptions();
  return {
    tenureEmi: tenureEmi,
    remainingBalance: remainingBalance,
    options: printOptions
  };
}

function Deposit(interest = 0, expense = 0) {
  var rate = interest - expense - interest * expense / 100;

  function effectiveRate() {
    return rate;
  }

  function depositEmiFundValue(emi, years, months) {
    return emiFundValue(emi, rate, years, months);
  }

  function depositOneTimeFundValue(investment, years, months) {
    return oneTimeFundValue(investment, rate, years, months);
  }

  function fundValueEmi(fundValue, years, months) {
    return fundValue / emiFundMultiplier(rate, years, months);
  }
  function fundValueOneTime(fundValue, years, months) {
    return fundValue / oneTimeFundMultiplier(rate, years, months);
  }
  function printOptions() {
    console.log('effectiveRate');
    console.log('emiFundValue(emi, years, months)');
    console.log('oneTimeFundValue(investment, years, months)');
    console.log('fundValueEmi(fundValue, years, months)');
    console.log('fundValueOneTime(fundValue, years, months)');
    console.log('options');
  }
  printOptions();

  return {
    effectiveRate: effectiveRate,
    emiFundValue: depositEmiFundValue,
    oneTimeFundValue: depositOneTimeFundValue,
    fundValueEmi: fundValueEmi,
    fundValueOneTime: fundValueOneTime,
    options: printOptions
  };
}
function intro() {
  console.log('emiFundMultiplier(rate, years = 0, months = 0)');
  console.log('oneTimeFundMultiplier(rate, years = 0, months = 0)');
  console.log('new Deposit(interest = 0, expense = 0)');
  console.log('new Loan(loan, rate)');
  console.log('options');
}
intro();

module.exports = {
  emiFundMultiplier: emiFundMultiplier,
  oneTimeFundMultiplier: oneTimeFundMultiplier,
  Deposit: Deposit,
  Loan: Loan,
  options: intro
};
