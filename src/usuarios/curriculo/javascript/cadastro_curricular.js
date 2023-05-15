var data_atribuicao = {
    "data": [
        {
            "id": 1,
            "empresa": "Lorem Ipsum",
            "cargo": "Teste de Ipsum",
            "periodo": "2 anos",
            "descricao": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a "
        }
    ]
}

var data_formacao = {
    "data": [
        {
            "id": 1,
            "escolaridade": "Lorem Ipsum",
            "curso": "Teste de Lorem",
            "formado": "2016",
            "descricao": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a "
        }
    ]
}

var db_atribuicao = JSON.parse(localStorage.getItem('db_curriculo_atribuicao'));
if (!db_atribuicao) {
    db_atribuicao = data_atribuicao
};

function insertAtributo(dados) {
    let id = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novaAtribuicao = {
        "id": id,
        "empresa": dados.empresa,
        "cargo": dados.cargo,
        "periodo": dados.periodo,
        "descricao": dados.descricao
    };

    db.data.push(novaAtribuicao);
    displayMessage("Inserida com sucesso");

    localStorage.setItem('db_curriculo_atribuicao', JSON.stringify(db));
}

function updateAtributo(id, data) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].empresa = data.empresa,
        db.data[index].cargo = data.cargo,
        db.data[index].periodo = data.periodo,
        db.data[index].descricao = data.descricao

    displayMessage("Alterada com sucesso");

    localStorage.setItem('db_curriculo_atribuicao', JSON.stringify(db));
}

function deleteAtributo(id) {
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Deletado com sucesso");

    localStorage.setItem('db_curriculo_atribuicao', JSON.stringify(db));
}

var db_formacao = JSON.parse(localStorage.getItem('db_curriculo_formacao'));
if (!db_formacao) {
    db_formacao = data_formacao
};

function insertFormacao(dados) {
    let id = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novaAtribuicao = {
        "id": id,
        "escolaridade": dados.Escolaridade,
        "curso": dados.curso,
        "formado": dados.formado,
        "descricao": dados.descricao
    };

    db.data.push(novaAtribuicao);
    displayMessage("Inserida com sucesso");

    localStorage.setItem('db_curriculo_formacao', JSON.stringify(db));
}

function updateFormacao(id, data) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].escolaridade = data.escolaridade,
        db.data[index].curso = data.curso,
        db.data[index].formado = data.formado,
        db.data[index].descricao = data.descricao

    displayMessage("Alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_curriculo_formacao', JSON.stringify(db));
}

function deleteFormacao(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Deletado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_curriculo_formacao', JSON.stringify(db));
}

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

var TipoEscolaridade = {
    "data": [
        {
            "id": "1",
            "descricao": "Cusando Superior",
        },
        {
            "id": "2",
            "descricao": "Superior Completo",
        },
        {
            "id": "3",
            "descricao": "Curso de especialização",
        },
        {
            "id": "4",
            "descricao": "Curso de capacitação"
        },
    ]
}