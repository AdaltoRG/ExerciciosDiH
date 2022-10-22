var contPrimos = 0,
  contDiv = 0;
for (i = 1; i <= 1000; i++) {
  for (j = 1; j <= i; j++) {
    if (i % j === 0) {
      contDiv++;
    }
  }
  if (contDiv === 2) {
    contPrimos++;
    console.log(`${contPrimos} - ${i}`);
  }
  contDiv = 0;
}

