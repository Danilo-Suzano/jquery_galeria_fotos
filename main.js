$(document).ready(function(){ // estrutura básica de inicio do jQuery
    console.log(document.querySelector('header button')) 
    console.log($('#botao-cancelar'))

    $('header button').click(function(){ // Quando o botão for clicado vai executar o callback
        $('form').slideDown(); // criar o efeito de expansão quando clicar em nova imagem
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp(); // criar o efeito de retração quando clicar no cancelar
    })

    $('form').on('submit', function(e){ // Remover o comportamento do botão do formulário de atualizar a página
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // para recuperar o valor que foi dado no form
        const novoItem = $('<li style=" display: none;"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem); // pegar o elemento dentro do src e aplica dentro li acima 
        $(`
            <div class="overlay-imagem-link"> 
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); //apagar o endereço de imagem quando adicionada a nova imagem
        $(novoItem).fadeIn(1000); //criar efeito de surgimento 
        $('#endereco-imagem-nova').val(''); //apagar o endereço de imagem quando adicionada a nova imagem
    })
})

