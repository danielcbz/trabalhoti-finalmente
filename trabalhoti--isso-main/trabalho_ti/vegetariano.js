const replitJsonUrl = "https://replit.com/join/auffqfdydk-ygabsxw";
  function exibirInformacoes() {
    const quadrado = document.getElementById('infoQuadrado');
    quadrado.innerHTML = `
        <h2>Informações:</h2>
        <p><strong>Nome:</strong> ${dados.nome}</p>
        <p><strong>Idade:</strong> ${dados.idade}</p>
        <p><strong>Cidade:</strong> ${dados.cidade}</p>
    `;
}

// Chame a função para exibir as informações ao carregar a página
window.onload = exibirInformacoes;