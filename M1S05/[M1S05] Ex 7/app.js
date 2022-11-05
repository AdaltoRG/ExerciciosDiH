import Partida from './Partida.js';
import Time from './Time.js';

const cruzeiro = new Time('Cruzeiro', 'CRU');
const vasco = new Time('Vasco', 'VAS');

const jogo = new Partida('CRU', 2, 'VAS', 0);

cruzeiro.computarPartida(jogo);
vasco.computarPartida(jogo);

cruzeiro.exibirSituacao();
vasco.exibirSituacao();
