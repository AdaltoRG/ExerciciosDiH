import Usuario from './Usuario.js';

const usuario = new Usuario('Adalto', 'email@email.com', '12345678');

const email = document.getElementById('email');
const senha = document.getElementById('senha');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  if (usuario.autenticar(email.value, senha.value)) {
    alert('Login efetuado com sucesso!');
  } else {
    alert('Credenciais informadas inválidas.');
  }
});
