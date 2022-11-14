const criaElemento = (tipo, texto) => {
  const elemento = document.createElement(tipo);
  elemento.innerText = texto;
  return elemento;
};

const capturaUser = async (quantidade = 4) => {
  try {
    const result = await fetch(`https://randomuser.me/api/?results=${quantidade}`);
    const { results } = await result.json();

    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    results.forEach((user) => {
      
      //Criando elementos HTML
      const li = document.createElement('li');
      const container = document.createElement('div');
      const info = document.createElement('div');

      container.classList.add('container');
      info.classList.add('info');
      
      // Armazenando informações e criando elementos
      const nome = criaElemento(
        'p',
        `${user.name.title} ${user.name.first} ${user.name.last}`
      );

      const email = criaElemento('p', user.email);

      const endereco = criaElemento(
        'p',
        `${user.location.street.name} - ${user.location.street.number} - ${user.location.city} - ${user.location.state} - ${user.location.country}`
      );

      const imagem = document.createElement('img');
      imagem.src = user.picture.large;

      //Inserindo informações
      container.appendChild(imagem);
      info.appendChild(nome);
      info.appendChild(email);
      info.appendChild(endereco);
      container.appendChild(info);
      li.appendChild(container);
      lista.appendChild(li);

    });
  } catch (error) {
    console.log(error);
  }
};
capturaUser();

const quantidade = document.getElementById('quantidade');
quantidade.addEventListener('change', (e) => capturaUser(e.target.value));
