const buscaBitcoin = async () => {
  try {
    const result = fetch('https://api.coincap.io/v2/assets/bitcoin');
    const { data } = await (await result).json();
    console.log(
      `O preço do Bitcoin - ${data.symbol} em dólares hoje é $${data.priceUsd}`
    );
  } catch (error) {
    console.error(error);
  }
};

buscaBitcoin();
