/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);*/
//const data = new Date(2019, 3, 20, 15, 14, 27); //Abril no js é 3, perspectivamente temos: ano, mês, dia, hora, minutos e segundos.

/*const data = new Date('2024-07-29 17:36:10'); //Deixando em branco ele receberá a data atual.
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());*/

/*const sla = new Date(1722286186694); //Timestamp
console.log('Dia ' + sla.getDate());
console.log('Mês ' + (sla.getMonth()+1))*/

function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString(); // Formata a data
    const time = now.toLocaleTimeString(); // Formata a hora
    return `Data: ${date}, Hora: ${time}`;
}

console.log(getCurrentDateTime());