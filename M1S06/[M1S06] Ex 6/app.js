const buscaIdadeMedia = async (nome) => {
  try {
    const result = await fetch(
      `https://api.agify.io/?country_id=BR&name=${nome}`
    );
    const data = await result.json();
    console.log(`${nome} - ${data.age}`);
  } catch (error) {
    console.error(error);
  }
};

buscaIdadeMedia('Adalto')