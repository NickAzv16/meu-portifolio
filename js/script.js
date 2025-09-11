
function enviarWhats(event) {
    // Esse prevent Default, funciona pra quando o formulário for enviado, a tela não reiniciar, não voltar pro início.
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511974932622'
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');

}