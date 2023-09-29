'use strict'

const section = document.getElementsByTagName('section')[0];
const button = document.getElementById('submit');
const h4 = document.getElementsByTagName('h4')[0];
const resultsDetail = document.getElementById('results-detail');

function handleGetFromData() {
  return {
    weight: document.getElementById('input-kg').value,
    height: document.getElementById('input-cm').value
  }
}

function bmiResultsCategories(value) {
  if (value < 18.5) {
    return 'Underweight';
  } else if (value >= 18.5 && value <= 24.9) {
    return 'Normal'
  } else if (value >= 25 && value <= 29.9) {
    return 'Overweight';
  } else {
    return 'Obesity';
  }
}

function bmiCalculate(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(1);
}

function takingAllResults(weight, height) {
  return {
    resultBmi: document.getElementsByClassName('result-bmi')[0].textContent = bmiCalculate(weight, height),
    resultCategories: document.getElementsByClassName('result-categories')[0].textContent = bmiResultsCategories(bmiCalculate(weight, height))
  }
}


button.addEventListener('click', e => {
  e.preventDefault();

  if (handleGetFromData().weight !== '' && handleGetFromData().height !== '') {
    takingAllResults(handleGetFromData().weight, handleGetFromData().height);
    resultsDetail.style.display = 'inline';
  } else {
    resultsDetail.textContent = 'Please fill the form correctly!';
    resultsDetail.style.fontWeight = '500';
    resultsDetail.style.fontSize = '1em';
    resultsDetail.style.display = 'inline';
  }
});







