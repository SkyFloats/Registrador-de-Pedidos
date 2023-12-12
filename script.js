//Cardapio da Lanchonete
let cardapio = [
    'Hamburguer',
    'Pizza',
    'Cachorro Quente',
    'Batata Frita',
    'Refrigerante'
];
//Pedidos que serão adicionados a Fila pelo atendente
let pedidos = [];
//Função para identificar se ainda tem pedidos na Fila
function semPedidos(pedidos){
    return pedidos.length === 0;
}
//Função para identificar se a Fila está cheia de pedidos (10 pedidos no caso)
function filaCheia(pedidos){
    return pedidos.length === 10;
}
//Função para adicionar um pedido no final do array / Também confirma se a lista está cheia antes
function incluirPedido() {
    if (filaCheia(pedidos)) {
        alert('Não é possivel adicionar mais pedidos, a fila está cheia.');
        console.log('Não é possivel adicionar mais pedidos, a fila está cheia.');
    }
    else {
        let numeroPedido = Number(prompt('#####Cardapio#####\n 1 - Hamburguer\n 2 - Pizza\n 3 - Cachorro Quente\n 4 - Batata Frita\n 5 - Refrigerante'));
        let pedido = cardapio[numeroPedido - 1];

        if (pedido) {
            pedidos.push(pedido)
            alert('Pedido adicionado na fila!\nSeu pedido é o número ' + pedidos.length);
            console.log('Pedido adicionado na fila!\nSeu pedido é o número ' + pedidos.length);
        } else {
            alert('Número de pedido invalido');
            console.log('Número de pedido invalido');
        }
        
    }

}
//Função para remover o primeiro pedido da lista / Também confirma se a lista está vazia antes
function atenderPedido (){
    if  (semPedidos(pedidos)){
        alert('Não existem mais pedidos na fila');
        console.log('Não existem mais pedidos na fila');
    }
    else {
        const pedidoAtendido = pedidos.shift();
        alert('O pedido ' + pedidoAtendido + ' foi atendido\nRestam ' + pedidos.length + ' pedidos')
        console.log('O pedido ' + pedidoAtendido + ' foi atendido\nRestam ' + pedidos.length + ' pedidos')
    }
}
//Função que lista de forma ordenada os pedidos que ainda não sairam em ordem
function listarPedido (){
    if  (semPedidos(pedidos)){
        alert('Não existem mais pedidos na fila');
        console.log('Não existem mais pedidos na fila');
    }
    else {
        let pedidosFormatados = pedidos.join(', ');
        alert(pedidosFormatados)
        console.log(pedidosFormatados)
    }

}
//Função que procura o pedido do cardapio mais proximo de sair da Fila e qual a sua posição na Fila
function pesquisarPedido(){
    if  (semPedidos(pedidos)){
        alert('Não existem pedidos na fila');
        console.log('Não existem pedidos na fila');
        return; 
    }
    else {
        let numeroPedido = Number(prompt('Digite o Número do pedido que você deseja pesquisar\n1 - Hamburguer\n 2 - Pizza\n 3 - Cachorro Quente\n 4 - Batata Frita\n 5 - Refrigerante'));

        if (numeroPedido >= 1 && numeroPedido <= cardapio.length) {
            let pedidoEncontrado = cardapio[numeroPedido - 1];

              let posicao = pedidos.indexOf(pedidoEncontrado) + 1;
            
            if (posicao !== -1) {
                alert('O pedido ' + pedidoEncontrado + ' está na fila na posição ' + posicao);
                console.log('O pedido ' + pedidoEncontrado + ' está na fila na posição ' + posicao);
            } else {
                alert('O pedido existe nenhum pedido de ' + numeroPedido + ' na fila de pedidos.');
                console.log('O pedido existe nenhum pedido de ' + numeroPedido + ' na fila de pedidos.');
            }            
        }
        else {
            alert('Número de pedido inválido.')
            console.log('Número de pedido inválido.')
        }
    }
}
//Função que encerra o programa / Funciona somente se não ouver pedidos na Fila
function encerrar (){
    if (semPedidos(pedidos)) {
        alert('Encerrando o Programa...');
        console.log('Encerrando o Programa...');
        continuar = false;
    }
    else {
        alert('Ainda existem pedidos a serem finalizados');
        console.log('Ainda existem pedidos a serem finalizados')
    }
}
//Cria uma variavel para manter o menu ativo até que seja encerrada
let continuar = true;
//Um while para manter o menu ativo quando uma das funções for encerradas
while (continuar){
    console.log("###### LANCHONETE ######\n# 1 - INCLUIR PEDIDO   #\n# 2 - ATENDER PEDIDO   #\n# 3 - LISTAR PEDIDOS   #\n# 4 - PESQUISAR PEDIDO #\n# 5 - ENCERRAR         #\n########################\n")
    //Solicita para o atendente qual das funções quer executar
    let menu = Number(prompt("###### LANCHONETE ######\n# 1 - INCLUIR PEDIDO   #\n# 2 - ATENDER PEDIDO   #\n# 3 - LISTAR PEDIDOS   #\n# 4 - PESQUISAR PEDIDO #\n# 5 - ENCERRAR         #\n########################\n"))
    //Usa um switch para definir qual das funções previamente criadas vai ser utilizada / testa para usar um numero valido
    switch (menu){
        case 1:
            incluirPedido();
            break;
        case 2:
            atenderPedido();
            break;
        case 3:
            listarPedido();
            break
        case 4:
            pesquisarPedido();
            break;
        case 5:
            encerrar();
            break;
        default:
        alert('Digite um dos números indicados')
        console.log('Digite um dos números indicados');
    }
}