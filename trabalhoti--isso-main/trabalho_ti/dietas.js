const replitJsonUrl = "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas";
const dados = {
  "informacoes": {
    "porcoes": [
      {
        "nome": "porção única",
        "descricao": "Uma porção individual adequada para uma pessoa."
      },
      {
        "nome": "porção dupla",
        "descricao": "Uma porção maior adequada para duas pessoas."
      },
      {
        "nome": "porção familiar",
        "descricao": "Uma porção grande adequada para uma família."
      }
    ],
    "sobremesas": [
      {
        "nome": "bolo de chocolate",
        "descricao": "Um delicioso bolo de chocolate coberto com glacê."
      },
      {
        "nome": "sorvete de baunilha",
        "descricao": "Sorvete cremoso de baunilha."
      },
      {
        "nome": "mousse de limão",
        "descricao": "Uma sobremesa refrescante com sabor de limão."
      }
    ],
    "dietas": [
      {
        "nome": "low-carb",
        "descricao": "Uma dieta com baixo teor de carboidratos."
      },
      {
        "nome": "paleo",
        "descricao": "Uma dieta baseada nos alimentos consumidos pelos nossos antepassados paleolíticos."
      },
      {
        "nome": "cetogênica",
        "descricao": "Uma dieta rica em gorduras e muito baixa em carboidratos."
      }
    ],
    "refeicoes": [
      {
        "nome": "café da manhã",
        "descricao": "Refeição principal geralmente consumida de manhã."
      },
      {
        "nome": "almoço",
        "descricao": "Refeição principal consumida durante o meio do dia."
      },
      {
        "nome": "jantar",
        "descricao": "Refeição principal consumida à noite."
      },
      {
        "nome": "lanche",
        "descricao": "Pequena refeição consumida entre as refeições principais."
      }
    ],
    "vegetariano": {
      "nome": "Vegetariano",
      "descricao": "Não contém carne ou produtos de origem animal."
    },
    "vegano": {
      "nome": "Vegano",
      "descricao": "Não contém carne ou qualquer produto de origem animal."
    }
  }
};

// Função para exibir as informações na página
async function exibirInformacoes() {

  // Porções
  // const porcoesDiv = document.getElementById('porcoes');
  // for (const porcao of dados.informacoes.porcoes) {
  //   const imagem = await getImagemAleatoria();
  //   porcoesDiv.innerHTML += `
  //         <div>
  //             <h2>${porcao.nome}</h2>
  //             <p>${porcao.descricao}</p>
  //             <img src="${imagem}" alt="${porcao.nome}">
  //         </div>
  //     `;
  // }

  // // Sobremesas
  // const sobremesasDiv = document.getElementById('sobremesas');
  // for (const sobremesa of dados.informacoes.sobremesas) {
  //   const imagem = await getImagemAleatoria();
  //   sobremesasDiv.innerHTML += `
  //         <div>
  //             <h2>${sobremesa.nome}</h2>
  //             <p>${sobremesa.descricao}</p>
  //             <img src="${imagem}" alt="${sobremesa.nome}">
  //         </div>
  //     `;
  // }
  // const dietasDiv = document.getElementById('dietas');
  // for (const dietas of dados.informacoes.dietas) {
  //   const imagem = await getImagemAleatoria();
  //   dietasDiv.innerHTML += `
  //         <div>
  //             <h2>${dietas.nome}</h2>
  //             <p>${dietas.descricao}</p>
  //             <img src="${imagem}" alt="${dietas.nome}">
  //         </div>
  //     `;
  // }
  // const refeicoesDiv = document.getElementById('refeicoes');
  // for (const refeicoes of dados.informacoes.refeicoes) {
  //   const imagem = await getImagemAleatoria();
  //   refeicoesDiv.innerHTML += `
  //         <div>
  //             <h2>${refeicoes.nome}</h2>
  //             <p>${refeicoes.descricao}</p>
  //             <img src="${imagem}" alt="${refeicoes.nome}">
  //         </div>
  //     `;
  // }
  const veganoDiv = document.getElementById('vegano');
  console.log(dados)
  veganoDiv.innerHTML += `
          <div>
              <h2>${dados.informacoes.vegano.nome}</h2>
              <p>${dados.informacoes.vegano.descricao}</p>
              <img src="https://source.unsplash.com/random" alt="${dados.informacoes.vegano.nome}">
          </div>
      `;
  // Dietas, Refeições, Vegano, Vegetariano - faça o mesmo para as outras categorias...
}

// Chame a função para exibir as informações quando a página carregar
document.onload = exibirInformacoes();