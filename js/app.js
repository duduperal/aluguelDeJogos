let qtdJogosAlugados = 0;
function exibirJogosAlugados(){
    console.log(qtdJogosAlugados);
}
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nome = gameClicado.querySelector('.dashboard__item__name');
    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Porfavor confirme que você quer devolver o jogo ${nome.innerHTML}`)){
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.innerHTML = "Alugar";
        }
    }else{
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";
        qtdJogosAlugados++;
    }
    exibirJogosAlugados();
}
