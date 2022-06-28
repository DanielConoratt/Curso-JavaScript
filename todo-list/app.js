'use strict';

/*<label class="todo__item">
<input type="checkbox">
<div>teste de item 1</div>
<input type="button" value="X">*/

/*Banco de dados*/
let banco = [
    {'tarefa' : 'Estudar JS', 'status': ''},
    {'tarefa' : 'netflix', 'status' : 'checked'}
];

/*Precisamos salvar(localStorege) os itens para que quando a pagina seja carregada(F5) os mesmos não sumam
getBanco Precisamos transformar pois o store só le (string) primeira linha
setBanco Depois quando tivermos que chamar o banco novamente converter para que o programa lei os itens dentro do [array]  */

const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? []; //se estiver itens na tela ok, se não deixe vazio.
const setBanco = (banco) => localStorage.setItem ('todoList', JSON.stringify(banco))
 
/*Cria botão(label)*/ 
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
         <input type="checkbox" ${status} data-indice=${indice}>
         <div>${tarefa}</div>
         <input type="button" value="X" data-indice=${indice}>
    `;
    document.getElementById('todoList').appendChild(item);
} 
/*Acaba botão (label)*/

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.forEach ((item, indice) => criarItem(item.tarefa, item.status, indice));//ler banco
}

const inserirItem = (evento) => {  //addEventlistiner é um evento(precionar tecla) inserir Item
    const tecla = evento.key;
    const texto = evento.target.value; // assume valor digitado na caixa
        if (tecla === 'Enter'){
            const banco = getBanco();
            banco.push ({'tarefa' : texto , 'status' : ''});
            setBanco(banco);
            atualizarTela();
            evento.target.value = ''; //limpa tarefa adicionada da caixa 
        }
}
const removerItem = (indice) => {
    const banco = getBanco();
    banco.splice (indice, 1); //remover do banco e ja atualizar a tela para o elemento sumir da tela
    setBanco(banco);
    atualizarTela();
}   

 const atualizarItem = (indice) => {
    const banco = getBanco();
     banco[indice].status = banco[indice].status === '' ? 'checked' : '';
     setBanco(banco);
     atualizarTela();
 }

const clickItem = (evento) =>{
   const elemento = evento.target; 
        if(elemento.type === 'button') {  //button se refere onde temos que clicar para deletar o elemento da tela no(X) 
           const indice = elemento.dataset.indice;
           removerItem(indice); //chama a função
        }
        else if (elemento.type === 'checkbox') {
           const indice = elemento.dataset.indice;
           atualizarItem (indice);     
        }
}

 
document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();

