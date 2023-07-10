//Haz tú validación en javascript acá
const inputs = document.querySelectorAll('input, textarea');
const buttonSend = document.querySelector('button[type="submit"]');
const messages = document.querySelectorAll('.input-message-error');

function validInput(input) {
  const inputType = input.dataset.type;
  if (input.validity.valid) {
    input.parentElement.querySelector('span').classList.remove('input-message-error');
    input.parentElement.querySelector('span').innerHTML = '';
  } else {
    input.parentElement.querySelector('span').classList.add('input-message-error');
    input.parentElement.querySelector('span').innerHTML = showErrorMessage(inputType, input);
  }
}

inputs.forEach(input => {
  input.addEventListener('blur', input => {
    validInput(input.target);
  })
});

const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch'
]

const errorMessages = {
    nombre: {
      valueMissing: 'Ingrese su nombre',
      patternMismatch: 'Ingrese solamente letras'
    },
    email: {
      valueMissing: 'Ingrese su email',
      typeMismatch: 'El correo no es válido',
      patternMismatch: 'Ejemplo: nombre@dominio.com'
    },
    asunto: {
      valueMissing: 'Ingrese su asunto',
      patternMismatch:"El asunto debe contener 5 a 30 letras"
    },
    mensaje: {
      valueMissing: 'Ingrese su mensaje',
      patternMismatch:"El mensaje debe contener 10 a 300 caracteres"
    }
}

function showErrorMessage(inputType, input) {
  let message = '';
  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      // console.log(inputType, error);
      // console.log(input.validity[error]);
      // console.log(errorMessages[inputType][error]);
      message = errorMessages[inputType][error];
    }
  });

  return message;
  
}

const form = document.querySelector('form');
form.addEventListener('change', () => {
    buttonSend.disabled = !form.checkValidity();
    if (!buttonSend.disabled) {
      buttonSend.classList.remove('grayscale');
      spanButton.classList.add('hidden');
    } else {
      buttonSend.classList.add('grayscale');
    }
});


// buttonSend.addEventListener('click', () => {
//   // event.preventDefault();
//   const sendMessage = document.querySelector('#send-message');
//   buttonSend.disabled = !form.checkValidity();
//   buttonSend.classList.add('grayscale');
//   sendMessage.showModal();

//   setTimeout(() => {
//     sendMessage.close();
//     form.reset();
//   }, 2000); 

// })
