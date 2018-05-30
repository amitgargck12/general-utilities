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

function MutualFund(interest, expense) {
  var rate = interest - expense - interest * expense / 100;

  function effectiveRate() {
    return rate;
  }

  function mutualFundEmiFundValue(emi, years = 0, months = 0) {
    return emiFundValue(emi, rate, years, months);
  }

  function mutualFundOneTimeFundValue(investment, years = 0, months = 0) {
    return oneTimeFundValue(investment, rate, years, months);
  }

  function fundValueEmi(fundValue, years = 0, months = 0) {
    return fundValue / emiFundMultiplier(rate, years, months);
  }
  function printOptions() {
    console.log('effectiveRate');
    console.log('emiFundValue(emi, years = 0, months = 0)');
    console.log('oneTimeFundValue(investment, years = 0, months = 0)');
    console.log('fundValueEmi(fundValue, years = 0, months = 0)');
    console.log('options');
  }
  printOptions();

  return {
    emiFundValue: mutualFundEmiFundValue,
    effectiveRate: effectiveRate,
    oneTimeFundValue: mutualFundOneTimeFundValue,
    fundValueEmi: fundValueEmi,
    options: printOptions
  };
}
function intro() {
  console.log('emiFundValue(emi, rate, years = 0, months = 0)');
  console.log('emiFundMultiplier(rate, years = 0, months = 0)');
  console.log('loanEmi(loan, rate, years = 0, months = 0)');
  console.log('oneTimeFundValue(investment, rate, years = 0, months = 0)');
  console.log('oneTimeFundMultiplier(rate, years = 0, months = 0)');
  console.log('new MutualFund(interest, expense)');
}
intro();

module.exports = {
  emiFundValue: emiFundValue,
  emiFundMultiplier: emiFundMultiplier,
  loanEmi: loanEmi,
  oneTimeFundValue: oneTimeFundValue,
  oneTimeFundMultiplier: oneTimeFundMultiplier,
  MutualFund: MutualFund
};
