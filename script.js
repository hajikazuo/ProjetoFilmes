function abrirDetalhes(id) {
    let url = "detalhes.html?id=" + id;
    window.open(url, "_blank");
}

function obterParametrosDaURL() {
    var url = window.location.href;
    var parametros = url.split("?")[1];
    var parametrosDivididos = parametros.split("&");
    var parametrosObjeto = {};

    for (var i = 0; i < parametrosDivididos.length; i++) {
        var parametro = parametrosDivididos[i].split("=");
        var chave = parametro[0];
        var valor = parametro[1];
        parametrosObjeto[chave] = valor;
    }

    return parametrosObjeto;
}

function buscarFilmePorId(id) {
    var filmes = {
        1: {
            nome: "Princesa Mononoke",
            descricao: "Princesa Mononoke é um filme de animação japonês dirigido por Hayao Miyazaki e produzido pelo Studio Ghibli. A data de estreia no Japão foi 12 de julho de 1997 e a estreia no restante do mundo aconteceu a partir de 1999.",
            sinopse: "Após enfrentar um deus javali enfurecido, o príncipe Ashitaka é amaldiçoado com um mal que pode matá-lo. Para encontrar a cura, ele decide viajar para longe e acaba se envolvendo numa batalha entre os deuses animais da floresta e os moradores de uma vila de mineiros, que aos poucos estão destruindo a floresta.",
        },
        2: {
            nome: "O Castelo Animado",
            descricao: "O Castelo Animado é uma animação japonesa do diretor Hayao Miyazaki, produzida pelo Studio Ghibli em 2004. A história é baseada no livro de mesmo nome da escritora inglesa Diana Wynne Jones.",
            sinopse: "Sofia é uma jovem de 18 anos que trabalha na chapelaria de seu pai. Em uma de suas raras idas à cidade ela conhece Hauru, um mágico bastante sedutor mas de caráter duvidoso. Ao confundir a relação existente entre eles, uma feiticeira lança sobre Sofia uma maldição que faz com que ela tenha 90 anos. Desesperada, Sofia foge e termina por encontrar o Castelo Animado de Hauru. Escondendo sua identidade, ela consegue ser contratada para realizar serviços domésticos no local, se envolvendo com os demais moradores do castelo.",
        },
    };

    return filmes[id] || null;
}

function exibirDetalhesDoFilme() {
    var parametros = obterParametrosDaURL();
    var id = parametros.id;
    var filme = buscarFilmePorId(id);

    if (filme) {
        var filmeContainer = document.getElementById("filme-container");
        var filmeHTML =
            "<h2>" +
            filme.nome +
            "</h2>" +
            "<p>Descrição: " +
            filme.descricao +
            "</p>";
        filmeContainer.innerHTML = filmeHTML;

        var filmeDetalhes = document.getElementById("filme-detalhes");

        var detalhesHTML =
            "<p>Sinopse: " +
            filme.sinopse +
            "</p>";
        filmeDetalhes.innerHTML = detalhesHTML;
    } else {
        var filmeContainer = document.getElementById("filme-container");
        filmeContainer.innerHTML = "<p>Filme não encontrado</p>";
    }
}
exibirDetalhesDoFilme();

