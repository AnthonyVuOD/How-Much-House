// this function will calculate suggested home cost and check validation
function calculateHomeCost (){

  // this function will add a comma to every thousands place in an integer
  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  var getRidOfCommas = document.getElementById('income').value,
      // monthlyIncome = document.getElementById('income').value/ 12,
      monthlyIncome = parseInt(getRidOfCommas.replace(/,/g, ''), 10)/ 12,
      monthlyMortgagePayment = monthlyIncome*.28,
      monthlyInterest = document.getElementById('interest').value/1200,
      loanLengthInMonths = document.getElementById('loanLength').value,
      exponentResult = Math.pow(1+monthlyInterest,loanLengthInMonths),
      suggestedHomeValue = [(exponentResult-1)*monthlyMortgagePayment]/[monthlyInterest*exponentResult*.8];


  if (isNaN(monthlyIncome) || isNaN(monthlyInterest) || isNaN(loanLengthInMonths)){
      alert("please enter valid numbers")
  } else {
      document.getElementById('houseValue').innerHTML = document.getElementById('houseValue').innerHTML = "$"+ numberWithCommas(Math.round(suggestedHomeValue));
      document.getElementById('monthlyMortgagePayment').innerHTML = "$"+ numberWithCommas(Math.round(monthlyMortgagePayment));
      document.getElementById('downpayment').innerHTML = "$"+ numberWithCommas(Math.round(suggestedHomeValue*.2));
  }
};
