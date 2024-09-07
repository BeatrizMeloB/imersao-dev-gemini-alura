function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Loga o elemento HTML da seção no console para verificação

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    //console.log(campoPesquisa);

    // Se campoPesquisa for uma string vazia
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Ops! Você esqueceu de digitar sua pesquisa! Tente novamente.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let cidade = "";
    let estado = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        cidade = dado.cidade.toLowerCase()
        estado = dado.estado.toLowerCase()

        // Se título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || cidade.includes(campoPesquisa) || estado.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="localização-meta">Localização: ${dado.cidade}, ${dado.estado}</p>
                <p class="tags-meta">Tags: ${dado.tags}</p>
                <p class="descrição-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
                <div class="item-imagem-mapa">
                    <img src="${dado.imagem}" width="580" height="300">
                    <iframe src="${dado.mapa}" width="580" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

}

