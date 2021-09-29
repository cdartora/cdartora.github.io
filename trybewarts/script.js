const loginBtn = document.querySelector('#login-btn');
const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#senha-login');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
submitBtn.disabled = true;

function validateLogin() {
  if (emailLogin.value === 'tryber@teste.com' && passwordLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function showSubmitButton() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreement.addEventListener('click', showSubmitButton);
loginBtn.addEventListener('click', validateLogin);
