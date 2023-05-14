var db_noticias_inicial = {
    "data": [
        {
            "id": 1,
            "publicacao": "29 de abril de 2023",
            "fonte": "",
            "titulo": "Demasiado Wi-Fi: NTT convida residentes de Tóquio a compartilhar acesso sem fio à Internet usando blockchain para evitar a construção de novas redes",
            "sintese": "TA gigante de TI NTT estima que Tóquio tenha 5 milhões de pontos de acesso Wi-Fi (APs), 20 vezes mais do que a cidade realmente precisa. De acordo com o The Register, uma empresa japonesa propôs uma solução incomum – permitir que usuários terceirizados se conectem a APs privados por uma taxa e usem tecnologias blockchain para autorização. Espera-se que isso forneça conectividade à capital japonesa sem novos pontos de acesso Wi-Fi ou mesmo estações base 5G adicionais.",
            "link": "https://avalanchenoticias.com.br/mercado-de-tecnologia-e-ti-noticia/demasiado-wi-fi-ntt-convida-residentes-de-toquio-a-compartilhar-acesso-sem-fio-a-internet-usando-blockchain-para-evitar-a-construcao-de-novas-redes/",
        },
        {
            "id": 2,
            "publicacao": "24 de abril de 2023",
            "fonte": "",
            "titulo": "Como a inteligência artificial (IA) e o ChatGPT podem aquecer ainda mais o mercado de jogos?",
            "sintese": "Quem já assistiu ao filme ‘Free Guy’, dirigido por Taika Waititi, sabe bem como seria caso os personagens não jogáveis, ou NPCs, utilizassem inteligência artificial. Àqueles que não viram, basta saber que a interação com um personagem pode, e está, ficando cada vez mais real. E isso pode aquecer ainda mais um mercado bilionário, que é o de jogos.",
            "link": "https://www.moneytimes.com.br/como-a-inteligencia-artificial-ia-e-o-chatgpt-podem-aquecer-ainda-mais-o-mercado-de-jogos/",
        },
        {
            "id": 3,
            "publicacao": "24 de abril de 2023",
            "fonte": "",
            "titulo": "Programa oferece R$ 1 milhão em bolsas de estudo para tecnologia",
            "sintese": "Tech Fellow, da Fundação Estudar, leva alunos para graduação e intercâmbio de longa duração nas melhores universidades do mundo.",
            "link": "https://exame.com/bussola/programa-oferece-r-1-milhao-em-bolsas-de-estudo-para-tecnologia/",
        },
        {
            "id": 4,
            "publicacao": "18 de março de 2023",
            "fonte": "",
            "titulo": "Layoffs em tecnologia: Com as demissões em massa, como ficam os profissionais que mantiveram seus empregos?",
            "sintese": "As demissões em massa, também chamadas de layoffs, estão se tornando um movimento cada vez mais comum no segmento de tecnologia.Empresas como Spotify, Amazon (AMZO34), Google (GOOGL) e Salesforce (SSFO34) estão entre as grandes companhias que já anunciaram reduções no quadro de funcionários.",
            "link": "https://www.moneytimes.com.br/layoffs-em-tecnologia-com-as-demissoes-em-massa-como-ficam-os-profissionais-que-mantiveram-seus-empregos/",
        },
        {
            "id": 5,
            "publicacao": "03 de março de 2023",
            "fonte": "",
            "titulo": "Sem lay-off: setor mais tradicional da economia é o que mais busca profissionais de tecnologia",
            "sintese": "Passando por uma revolução, área que existe há séculos quer integrar tecnologia às fazendas e precisa de profissionais para liderar essa mudança",
            "link": "https://exame.com/carreira/sem-lay-off-setor-mais-tradicional-da-economia-brasileira-e-o-que-mais-busca-profissionais-de-tecnologia-hoje/",
        }

    ]
}

// Caso os data já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_noticias'));
if (!db) {
    db = db_noticias_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertNoticia(noticia) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novaNoticia = {
        "id": novoId,
        "publicacao": noticia.publicacao,
        "titulo": noticia.titulo,
        "sintese" : noticia.sintese,
        "link": noticia.link
    };

    // Insere o novo objeto no array
    db.data.push(novaNoticia);
    displayMessage("Notícia inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_noticias', JSON.stringify(db));
}

function updateNoticia(id, noticia) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].publicacao = noticia.publicacao,
    db.data[index].titulo = noticia.titulo,
    db.data[index].sintese = noticia.sintese,
    db.data[index].link = noticia.link,

    displayMessage("Notícia alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_noticias', JSON.stringify(db));
}

function deleteNoticia(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Notícia removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_noticias', JSON.stringify(db));
}