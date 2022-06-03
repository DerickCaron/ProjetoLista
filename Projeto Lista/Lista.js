





let banco = [
    
];


const inserirItem = (evento) => {
    const tecla = evento.key;
    const textos = evento.target.value; /*Essa TARGET.VALUE serve para o valor do item, ou seja, no caso da lista ele serviu para que quando fosse digitado na BARRA E DIGITAÇÃO ele mantesse o que foi escrito assim que clicasse o ENTER*/
    if (tecla === 'Enter') { /*é necessário usar o sinal ===  toda vez que se referir a alguma tecla*/
        banco.push ({'bancoss': textos});
        atualizarTela()
        evento.target.value = ''; /*Aqui se usou a TARGET.VALUE para definir que o valor de algo seria 0 assim que tudo o que está na função fosse executado, no caso assim que a pessoa digitasse na BARRA DE DIGITAÇÃo o que queria a BARRA deveria ter automaticamente VALOR VAZIO*/
    }

}
document.getElementById('todo-novo-item').addEventListener('keypress', inserirItem);
/*Aqui acima estou dizendo para o sistema adicionar um evendo na TAG que tem o ID "todo-novo-item", no caso o evento é adicionar a possibilidade um BOTÃO DO TECLADO e usar este botão como referência para ir para outra função, no caso essa TAG que foi adicionadoeste evento é o local da BARRA DE DIGITAÇÃO. */






/*1*/const criarItem = (texto, statu) => {
    const items = document.createElement('label'); /* Aqui estou dizendo que a CONSTANTE "item" é igual = a um pedido para o sistema criar uma LABEL no HTML. Detalhe se você escrever ali no lugar de LABEL escrever dfgnfdghjkgdjk na hora de criar o elemento vai aparecer <dfgnfdghjkgdjk> </dfgnfdghjkgdjk>*/
    items.classList.add('todo-item'); /*Aqui estou dizendo para o sistema colocar dentro da minha constante "Item", ou seja, dentro da LABEL uma CLASSE chamada "todo-item", e detalhe que classList significa pedir para o sistema a possibilidade de criar outras CLASSES, neste caso para criar outra classe o sistema seria obrigado a criar também uma nova LABEL, pois a CLASSE está dentro dela*/
    items.innerHTML = /*CHECKBOX serve para fazer aquelas coisa que MARCA e DESMARCA na lista*/
    `<input type="checkbox" ${statu} > 
     <div ${statu}>${texto}</div>
     <input type="button" value="X" >
            `  /*DETALHE Importántissomo que pode atrapalhar em outros innerHTML, este sinal ' é diferente deste ` o correto é `*/
    /*Aquela palavra texto é um nome que dei que serve para indicar para o sistema onde deve ir o texto que a pessoa escrever, se eu colocasse essa mesma paralavra TEXTO dento da TAG DIV não funcionaria, mas como colocado entre a DIV que abre e a que fecha o sistema entendeu que ali deve ir o texto assim que a função CRIAR ITEM for acionada, lembrando que não fará diferença nenhuma se alterar o nome de TEXTO para CAVALO, eu só coloquei TEXTO para fazer sentido*/
    document.getElementById('TodaLista').appendChild(items) /* Aqui estou pedindo para o sistema PEGAR a TAG com a CLASSE "TodaLista" e colocar dentro dela(appendChild) a constante "item" que criamos acima, ou seja, tudo aquilo que a função criou que é a LABEl e tudo o que está dentro do InnerHTML=`` e colocar tudo isso dentro da TAG que tem o ID chamado "TodaLista".*/
}


const LimparTarefas = () => {
    const TodaLista= document.getElementById('TodaLista');
    while (TodaLista.firstChild) {TodaLista.removeChild(TodaLista.lastChild)}
}

const atualizarTela = () => {
    LimparTarefas();
    banco.forEach ((items, indices) => criarItem (items.bancoss, indices)); /*O FOREACH serve para PEGAR todos as VARIAVEIS de uma ARRAY*/
    /*a palavra ITEMS e INDICES são quase SINONIMOS da VARIAVEL BANCO e serve como um endereço para conectar o BANCO dentro de outra função. Já a segunda palavra que vem depois é o INDICE, ele serve como um PARAMETRO NUMBER para identificar por números o que está dentro do BANCO, sempre será assim no FOREACH, a primeira palavra é parametro de ENDEREÇO e a segunda um parametro de NÚMERO */
}   /*Assim que você cria os dois PARAMETROS do FOREACH, a função CRIAR ITEM vai pegar o primeiro PARAMETRO do FOREACH e conectar ele com o primeiro PARAMETRO do CRIARITEM, e o segundo parametro do FOREACH conectar com o segundo PARAMETRO do CRIAR ITEM.*/






const atualizarItem = (number) => {
    banco[number].statu = banco[number].statu === '' ? 'checked': '';
    atualizarTela();
}


const removerItem = (indice) => {
    banco.splice (indice, 1);
    atualizarTela();
}



const clickItem = (evento) => {
    const elemento = evento.target;
if(elemento.type === 'button') {
    const indice = elemento.dataset.indice;
    removerItem(indice);
} else if (elemento.type === 'checkbox'){
const indice = elemento.dataset.indice;
atualizarItem (indice);  
}

}

document.getElementById('TodaLista').addEventListener('click', clickItem); /*Detalhe, e sempre importante colocar este DOCUMENT abaixo da função ao qual for direcionada*/





atualizarTela() /*Essa é a primeira função a ser ativada assim que inicializa, pois essa funciona como uma porta de entrada para todas as outras*/










