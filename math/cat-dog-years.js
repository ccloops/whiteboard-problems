'use strict';

const humanYearsCatYearsDogYears = function(humanYears) {
  
  let dogYears;
  let catYears;
  
  if(humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  }

  if(humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  }

  if(humanYears >= 3) {
    let yearsToMultiply = humanYears - 2;
    catYears = 24 + (yearsToMultiply * 4);
    dogYears = 24 + (yearsToMultiply * 5);
  }
  console.log([humanYears, catYears, dogYears]);
  return [humanYears, catYears, dogYears];
};

humanYearsCatYearsDogYears(3);

  