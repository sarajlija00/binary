
function validNumber () {
  let binary = document.getElementById('number').value;
<<<<<<< HEAD
  document.getElementById('number').value ="";
  for(let i = 0; i < binary.length; i++) {
=======
  for (i = 0; i < binary.length; i++) {
>>>>>>> 2901b01e06cc96e7e456e89e85c530c57b8cb216
    const inputNumber = binary[i];
    if(inputNumber < 0 || inputNumber > 1){
      document.getElementById('invalid').innerText = 'NUMBER IS NOT BINARY' 
<<<<<<< HEAD
      return false
    }
  } 
  document.getElementById('invalid').style = 'display:none';
  return true
  
}

function pow(base,exp) {
  if (exp == 0) return 1;
  if (exp == 1) return base;
  let result = 0;
  for(let i = exp; i > 0; i--){
    if(result == 0){
=======
      return false;
    }
  }
  return true;

}

function pow(base, exp) {
  if (exp == 0) return 1;
  if (exp == 1) return base;
  let result = 0;
  for (let i = exp; i > 0; i--){
    if (result == 0) {
>>>>>>> 2901b01e06cc96e7e456e89e85c530c57b8cb216
      result = base;
    } else {
      result = result * base;
    }
<<<<<<< HEAD
  }
  return result;
}

function convert () {
  let binary = document.getElementById('number').value;
  let number = ``;
  for (let i = 0; i < binary.length - 1; i++){
    number += binary[i] * pow(2, i);
  }
  document.getElementById('result').innerText = number;
  return number;
=======
  }
  return result;
}

function convert() {
  let binary = document.getElementById('number').value;
  let convertNumber = 0;
  for(let i = 0; i < binary.length; i++) {
    convertNumber += binary[i] * pow(2, i);
  }
  return convertNumber;
}

function converted () {
  if(!validNumber()) {
    return;
  };
  console.log(convert())
>>>>>>> 2901b01e06cc96e7e456e89e85c530c57b8cb216
}

function converted () {
  if(!validNumber()){
    return
  }
  console.log(convert());
}