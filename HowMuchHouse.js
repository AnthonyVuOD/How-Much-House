
/* this function will calculate suggested home cost and check validation*/
function calculateHomeCost (){
  var monthlyIncome = document.getElementById('income').value/ 12,
      monthlyMortgagePayment = monthlyIncome*.28,
      monthlyInterest = document.getElementById('interest').value/1200,
      loanLengthInMonths = document.getElementById('loanLength').value,
      exponentResult = Math.pow(1+monthlyInterest,loanLengthInMonths),
      suggestedHomeValue = [(exponentResult-1)*monthlyMortgagePayment]/[monthlyInterest*exponentResult*.8];

  if (isNaN(monthlyIncome) || isNaN(monthlyInterest) || isNaN(loanLengthInMonths)){
      alert("please enter valid numbers")
  } else {
      document.getElementById('houseValue').innerHTML = document.getElementById('houseValue').innerHTML = "$"+Math.round(suggestedHomeValue);
      document.getElementById('monthlyMortgagePayment').innerHTML = "$"+Math.round(monthlyMortgagePayment);
      document.getElementById('downpayment').innerHTML = "$"+Math.round(suggestedHomeValue*.2);
  }
};
