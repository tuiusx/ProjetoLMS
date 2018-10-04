/*function insereTexto(){
    document.getElementById('divTeste').innerHTML = 'Teste inserindo texto.';
} */

function ativa(){ 
    var div = document.getElementById('div') 
    /* se conteúdo está escondido, mostra e troca o valor do botão para: esconde */ 
    if (div.style.display == 'none') { 
    document.getElementById("botao").value='esconde' 
    div.style.display = 'block' 
    } else { 
    /* se conteúdo está a mostra, esconde o conteúdo e troca o valor do botão para: mostra */ 
    div.style.display = 'none' 
    document.getElementById("botao").value='mostra' 
    } 
    } 