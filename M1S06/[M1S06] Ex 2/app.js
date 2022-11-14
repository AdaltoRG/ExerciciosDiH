const timer = () => {
  setInterval(() => {
    const data = new Date();
    console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
  }, 2000);
};
timer();
