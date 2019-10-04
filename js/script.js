function validNumber() {
  let binary = document.getElementById('number').value;
  for (i = 0; i < binary.length; i++) {
    const inputNumber = binary[i];
    if(inputNumber < 0 || inputNumber > 1) {
      document.getElementById('invalid').innerText = 'NUMBER IS NOT BINARY' 
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
      result = base;
    } else {
      result = result * base;
    }
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
}


