const buscaBitcoin = async () => {
  try {
    const result = await fetch('https://api.coincap.io/v2/assets/bitcoin');
    const { data } = await result.json();
    console.log(
      `O preço do Bitcoin - ${data.symbol} em dólares hoje é $${data.priceUsd}`
    );
  } catch (error) {
    console.error(error);
  }
};

buscaBitcoin();
