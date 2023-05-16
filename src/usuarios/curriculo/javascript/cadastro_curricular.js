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
            "escolaridade": "Cusando Superior",
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
    if (db_atribuicao.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novaAtribuicao = {
        "id": novoId,
        "empresa": dados.empresa,
        "cargo": dados.cargo,
        "periodo": dados.periodo,
        "descricao": dados.descricao
    };

    db_atribuicao.data.push(novaAtribuicao);
    displayMessage("Inserida com sucesso");

    localStorage.setItem('db_curriculo_atribuicao', JSON.stringify(db_atribuicao));
}

function updateAtributo(id, data) {
    let index = db_atribuicao.data.map(obj => obj.id).indexOf(id);

    db_atribuicao.data[index].empresa = data.empresa,
    db_atribuicao.data[index].cargo = data.cargo,
    db_atribuicao.data[index].periodo = data.periodo,
    db_atribuicao.data[index].descricao = data.descricao

    displayMessage("Alterada com sucesso");

    localStorage.setItem('db_curriculo_atribuicao', JSON.stringify(db_atribuicao));
}

function deleteAtributo(id) {
    db_atribuicao.data = db_atribuicao.data.filter(function (element) { return element.id != id });

    displayMessage("Deletado com sucesso");

    localStorage.setItem('db_curriculo_atribuicao', JSON.stringify(db_atribuicao));
}

var db_formacao = JSON.parse(localStorage.getItem('db_curriculo_formacao'));
if (!db_formacao) {
    db_formacao = data_formacao
};

function insertFormacao(dados) {
    let id = 1;
    if (db_formacao.data.length != 0)
        novoId = db_formacao.data[db_formacao.data.length - 1].id + 1;
    let formacao = {
        "id": novoId,
        "escolaridade": dados.Escolaridade,
        "curso": dados.curso,
        "formado": dados.formado,
        "descricao": dados.descricao
    };

    db_formacao.data.push(formacao);
    displayMessage("Inserida com sucesso");

    localStorage.setItem('db_curriculo_formacao', JSON.stringify(db_formacao));
}

function updateFormacao(id, data) {
    let index = db_formacao.data.map(obj => obj.id).indexOf(id);

    db_formacao.data[index].escolaridade = data.escolaridade,
    db_formacao.data[index].curso = data.curso,
    db_formacao.data[index].formado = data.formado,
    db_formacao.data[index].descricao = data.descricao

    displayMessage("Alterada com sucesso");
    localStorage.setItem('db_curriculo_formacao', JSON.stringify(db_formacao));
}

function deleteFormacao(id) {
    db_formacao.data = db_formacao.data.filter(function (element) { return element.id != id });
    displayMessage("Deletado com sucesso");
    localStorage.setItem('db_curriculo_formacao', JSON.stringify(db_formacao));
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