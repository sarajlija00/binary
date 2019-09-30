function validNumber() {
  let binary = document.getElementById('number').value;
  document.getElementById('number').value = "";
  for (i = 0; i < binary.length; i++) {
    const inputNumber = binary[i];
    if(inputNumber < 0 || inputNumber > 1) {
      document.getElementById('invalid').innerText = 'NUMBER IS NOT BINARY' 
    }
    return true;
  }
}

function pow(base, exp) {
  let binary = document.getElementById('number').value;
  if (exp == 0) return 1;
  if (exp == 1) return base;
  let result = 0;
  for (i = exp; exp > 0; i--){
    if (result == 0) {
      return base;
    } else {
      result = result * base;
    }
    return result;
  }
  let convertNumber = 0;
  for(let i = 0; i < binary.length; i++) {
    convertNumber += binary[i] * pow(2, i);
    document.getElementById('result').innerText = convertNumber;
  }
}

function converted () {
  validNumber();
  pow();
}


