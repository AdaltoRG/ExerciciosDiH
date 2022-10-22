let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() +1;   
let estacao;

if((dia>=22 && mes===9)|| mes===10 || mes===11 || (dia<=21 && mes===12)){
    estacao='Primavera'
}else if((dia>=22 && mes===6)|| mes===7 || mes===8 || (dia<=21 && mes===9)){
    estacao='Inverno'
}else if((dia>=22 && mes===3)|| mes===4 || mes===5 || (dia<=21 && mes===6)){
    estacao='Outono'
}else{
    estacao='Verão'
}
alert(`Estação atual: ${estacao}`)