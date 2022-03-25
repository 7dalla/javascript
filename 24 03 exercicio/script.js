function mostrarnumeros(){
    let bot1 = document.createElement('p');
    bot1.textContent = '1 2 3 4 5 6 7 8 9 10';
    document.body.appendChild(bot1);
}
const botao1 = document.querySelectorAll('button');
for(var i = 0; i < botao1.length ; i ){
    botao1[i].addEventListener('click', mostrarnumeros);
}

function debitotecnico(){
    let bot2 = document.createElement('p');
    bot2.textContent = 'Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade. O motivo por trás de tudo isso? Diminuir o tempo de lançamento de determinado produto de software.';
    document.body.appendChild(bot2);
}
const botao2 = document.querySelectorAll('button');
for(var c = 0; c < botao2.length ; c++ ){
    botao2[c].addEventListener('click', debitotecnico);
}

function sonarjenkins(){
    let bot3 = document.createElement('p');
    bot3.textContent = 'sonar e jenkins';
    document.body.appendChild(bot3);
}
const botao3 = document.querySelectorAll('button');
for(var b = 0; b < botao3.length ; b++ ){
    botao3[b].addEventListener('click', sonarjenkins);
}