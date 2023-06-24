var db = {
    "interessesvagas": [
        {
            "id": 1,
            "idusuario": 2,
            "codigovaga": 7,
        },
        {
            "id": 2,
            "idusuario": 2,
            "codigovaga": 5,
        },
        {
            "id": 3,
            "idusuario": 2,
            "codigovaga": 9,
        },
        {
            "id": 4,
            "idusuario": 2,
            "codigovaga": 8,
        },
        {
            "id": 5,
            "idusuario": 2,
            "codigovaga": 10,
        },
    ],
    "interessesnoticias": [
        {
            "id": 1,
            "idusuario": 2,
            "codigonoticia": 1,
        },

    ],
    "interessescursos": [
        {
            "id": 1,
            "idusuario": 2,
            "codigocurso": 1,
        },

    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbinteresses = JSON.parse(localStorage.getItem('db_interesses'));
if (!dbinteresses) {
    dbinteresses = db;
};

function displayMessageSucesso(msg) {
    $('#msg').html('<div class="alert alert-success">' + msg + '</div>');
}
function displayMessageErro(msg) {
    $('#msg').html('<div class="alert alert-danger">' + msg + '</div>');
}
function insertInteresses(idvaga) {

    let reg = getVagasInteresseUser(idvaga);
    if (!reg) {
        // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
        let novoId = 1;
        if (dbinteresses.interessesvagas.length != 0)
            novoId = dbinteresses.interessesvagas[dbinteresses.interessesvagas.length - 1].id + 1;
        let novoiteresse = {
            "id": novoId,
            "idusuario": usuarioCorrente.codigo,
            "codigovaga": idvaga,
        };

        // Insere o novo objeto no array
        dbinteresses.interessesvagas.push(novoiteresse);

        displayMessageSucesso("Vaga gravada como Interesse.");

        // Atualiza os dados no Local Storage
        localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
    }
    else{
        displayMessageErro("Estava vaga já se encontra como interesse.");
    }


}

function insertInteressesNoticia(idnoticia) {

    let reg = getNoticiaInteresseUser(idnoticia);
    if (!reg) {
        // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
        let novoId = 1;
        if (dbinteresses.interessesnoticias.length != 0)
            novoId = dbinteresses.interessesnoticias[dbinteresses.interessesnoticias.length - 1].id + 1;
        let novoiteresse = {
            "id": novoId,
            "idusuario": usuarioCorrente.codigo,
            "codigonoticia": idnoticia,
        };

        // Insere o novo objeto no array
        dbinteresses.interessesnoticias.push(novoiteresse);

        displayMessageSucesso("Notícia gravada como Interesse.");

        // Atualiza os dados no Local Storage
        localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
    }
    else{
        displayMessageErro("Estava notícia já se encontra como interesse.");
    }


}
function insertInteressesCursos(idcurso) {

    let reg = getCursoInteresseUser(idcurso);
    if (!reg) {
        // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
        let novoId = 1;
        if (dbinteresses.interessescursos.length != 0)
            novoId = dbinteresses.interessescursos[dbinteresses.interessescursos.length - 1].id + 1;
        let novoiteresse = {
            "id": novoId,
            "idusuario": usuarioCorrente.codigo,
            "codigocurso": idcurso,
        };

        // Insere o novo objeto no array
        dbinteresses.interessescursos.push(novoiteresse);

        displayMessageSucesso("Curso gravado como Interesse.");

        // Atualiza os dados no Local Storage
        localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
    }
    else{
        displayMessageErro("Estave curso já se encontra como interesse.");
    }


}


function deleteInteresse(id) {       
    // Filtra o array removendo o elemento com o id passado
    dbinteresses.interessesvagas = dbinteresses.interessesvagas.filter(function (element) { return element.id != id });
    // Atualiza os dados no Local Storage
    localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
}

function deleteInteressenoticias(id) {       
    // Filtra o array removendo o elemento com o id passado
    dbinteresses.interessesnoticias = dbinteresses.interessesnoticias.filter(function (element) { return element.id != id });
    // Atualiza os dados no Local Storage
    localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
}

function deleteInteressecursos(id) {       
    // Filtra o array removendo o elemento com o id passado
    dbinteresses.interessescursos = dbinteresses.interessescursos.filter(function (element) { return element.id != id });
    // Atualiza os dados no Local Storage
    localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
}


function getVagasInteresseUser(codigoVaga) {
    for (var i = 0; i < dbinteresses.interessesvagas.length; i++) {
        var iteressevaga = dbinteresses.interessesvagas[i];
        if (iteressevaga.idusuario === usuarioCorrente.codigo) {
            if (iteressevaga.codigovaga === codigoVaga) {
                return iteressevaga; // Retorna o valor desejado
            }
        }

    }
}

function getNoticiaInteresseUser(codigoNoticia) {
    for (var i = 0; i < dbinteresses.interessesnoticias.length; i++) {
        var iteressenoticia = dbinteresses.interessesnoticias[i];
        if (iteressenoticia.idusuario === usuarioCorrente.codigo) {
            if (iteressenoticia.codigonoticia === codigoNoticia) {
                return iteressenoticia; // Retorna o valor desejado
            }
        }

    }
}

function getCursoInteresseUser(codigoCurso) {
    for (var i = 0; i < dbinteresses.interessescursos.length; i++) {
        var iteressecurso = dbinteresses.interessesnoticias[i];
        if (iteressecurso.idusuario === usuarioCorrente.codigo) {
            if (iteressecurso.codigocurso === codigoCurso) {
                return iteressecurso; // Retorna o valor desejado
            }
        }

    }
}




