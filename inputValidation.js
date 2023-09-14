const input = document.querySelector('.mail-input')
const error = document.querySelector('.input-error')

input.onblur = function() {
    if (!input.value.includes('@')) { 
      input.classList.add('invalid');
      error.innerHTML = 'Будь ласка, введіть правильну електронну адресу.'
    }
  };
  
  input.onfocus = function() {
    if (this.classList.contains('invalid')) {
    
      this.classList.remove('invalid');
      error.innerHTML = "";
    }
  };