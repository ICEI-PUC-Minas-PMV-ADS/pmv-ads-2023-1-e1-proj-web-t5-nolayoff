var data_curriculo = {
    "atribuicao": [
        {
            "id": 1,
            "codusuario": 2,
            "empresa": "Lorem Ipsum",
            "cargo": "Desenvolvedor Full-Stack",
            "periodo": "2 anos",
            "descricao": "Participação no desenvolvimento de um aplicativo de gerenciamento de tarefas usando React no front-end e Node.js no back-end. - Colaboração com uma equipe multidisciplinar para planejar e implementar recursos e melhorias no sistema. - Integração de APIs externas e implementação de testes concluídos para garantir a qualidade do software."
        },
        {
            "id": 2,
            "codusuario": 2,
            "empresa": "Lorem Ipsum",
            "cargo": "Desenvolvedor Full-Stack 2",
            "periodo": "2 anos",
            "descricao": "Participação no desenvolvimento de um aplicativo de gerenciamento de tarefas usando React no front-end e Node.js no back-end. - Colaboração com uma equipe multidisciplinar para planejar e implementar recursos e melhorias no sistema. - Integração de APIs externas e implementação de testes concluídos para garantir a qualidade do software."
        }
    ],
    "formacao": [
        {
            "id": 1,
            "codusuario": 2,
            "escolaridade": 2,
            "curso": "Teste de Lorem",
            "formado": "2016",
            "descricao": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a "
        }
    ],
    "habilidades": [
        {
            "codusuario": 2,
            "cargo": "Desenvolvedor Web",
            "sobreusuario": "Full-Stack altamente motivado e apaixonado por criar soluções de software eficientes e escaláveis. Possuo experiência comprovada no desenvolvimento de aplicativos web e habilidades tanto no front-end quanto no back-end. Sou dedicado, autodidata e sempre em busca de aprimoramento contínuo.",
            "competenciasuser": "Go;CSS;PHP;",
        }

    ]
}

//atualiza base de dados
var db_curriculo = JSON.parse(localStorage.getItem('db_curriculo'));
if (!db_curriculo) {
    db_curriculo = data_curriculo
};

//mensagens 
function displayMessageSucesso(msg) {
    $('#msg').html('<div class="alert alert-success">' + msg + '</div>');
}
function displayMessageErro(msg) {
    $('#msg').html('<div class="alert alert-danger">' + msg + '</div>');
}


function saveHabilidades(data) {

    //pega o indice do registro na base de dados
    let index = db_curriculo.habilidades.map(obj => obj.codusuario).indexOf(usuarioCorrente.codigo);
   
    //se existir o registro 
    if(index >= 0){
        db_curriculo.habilidades[index].sobreusuario = data.sobreuser;
        db_curriculo.habilidades[index].cargo = data.cargo;
        db_curriculo.habilidades[index].competenciasuser = data.competenciasuser;    
        displayMessageSucesso("Habilidade Alterada com sucesso");
        localStorage.setItem('db_curriculo', JSON.stringify(db_curriculo));
    }else{//insere o registro
        let habilidades = {        
            "codusuario": usuarioCorrente.codigo,
            "sobreusuario": data.sobreuser,
            "cargo": data.cargo,
            "competenciasuser": data.competenciasuser,        
        };    
        db_curriculo.habilidades.push(habilidades);
        displayMessageSucesso("Habilidade Inserida com sucesso");    
        localStorage.setItem('db_curriculo', JSON.stringify(db_curriculo));       
    }  
}


function insertAtributos(dados) {   
    
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db_curriculo.atribuicao.length != 0){
        novoId = db_curriculo.atribuicao[db_curriculo.atribuicao.length - 1].id + 1;
    } 
     
    let novaAtribuicao = {
        "id": novoId,
        "codusuario": usuarioCorrente.codigo,
        "empresa": dados.empresa,
        "cargo": dados.cargo,
        "periodo": dados.periodo,
        "descricao": dados.descricao
    };
    db_curriculo.atribuicao.push(novaAtribuicao);
    displayMessageSucesso(" Atribuição Inserida com sucesso");
    localStorage.setItem('db_curriculo', JSON.stringify(db_curriculo));
}

function updateAtributo(id, data) {

     // Localiza o indice do objeto a ser alterado no array a partir do seu ID
     let index = dbvagas.vagas.map(obj => obj.id).indexOf(id);  

    db_curriculo.atribuicao[index].codusuario = usuarioCorrente.codigo,
    db_curriculo.atribuicao[index].empresa = data.empresa,
    db_curriculo.atribuicao[index].cargo = data.cargo,
    db_curriculo.atribuicao[index].periodo = data.periodo,
    db_curriculo.atribuicao[index].descricao = data.descricao

    displayMessageSucesso("Alterada com sucesso");

    localStorage.setItem('db_curriculo', JSON.stringify(db_curriculo));
}

function deleteAtributo(id) {
    db_curriculo.atribuicao = db_curriculo.atribuicao.filter(function (element) { return element.id != id });

    displayMessageSucesso("Deletado com sucesso");

    localStorage.setItem('db_curriculo', JSON.stringify(db_curriculo));
}

// FORMAÇÃO

function insertFormacao(dados) {
    let id = 1;
    if (db_curriculo.formacao.length != 0)
        novoId = db_curriculo.formacao[db_curriculo.formacao.length - 1].id + 1;

    let formacao = {
        "id": novoId,
        "codusuario": usuarioCorrente.codigo,
        "escolaridade": dados.escolaridade,
        "curso": dados.curso,
        "formado": dados.formado,
        "descricao": dados.descricao
    };

    db_curriculo.formacao.push(formacao);
    displayMessageSucesso("Formação Inserida com sucesso");

    localStorage.setItem('db_curriculo', JSON.stringify(db_curriculo));
}

function updateFormacao(id, data) {
    let index = db_curriculo.formacao.map(obj => obj.id).indexOf(id);

    db_curriculo.formacao[index].escolaridade = data.escolaridade,
        db_curriculo.formacao[index].curso = data.curso,
        db_curriculo.formacao[index].formado = data.formado,
        db_curriculo.formacao[index].descricao = data.descricao

    displayMessageSucesso("Alterada com sucesso");
    localStorage.setItem('db_curriculo', JSON.stringify(db_curriculo));
}

function deleteFormacao(id) {
    db_curriculo.formacao = db_curriculo.formacao.filter(function (element) { return element.id != id });
    displayMessageSucesso("Formação Deletada com sucesso");
    localStorage.setItem('db_curriculo', JSON.stringify(db_curriculo));
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



// Função para obter um valor com base no código de usuário e código de atribuição
function getAtribuicaoUser(codigoAtribuicao) {
    for (var i = 0; i < db_curriculo.atribuicao.length; i++) {
        var atribuicao = db_curriculo.atribuicao[i];
        if (atribuicao.codusuario === usuarioCorrente.codigo) {
            if (atribuicao.id === codigoAtribuicao) {
                return atribuicao; // Retorna o valor desejado
            }
            else {
                continue;
            }
        }
        else {
            continue;
        }
    }
}
// Função para obter vários valores com base no código de usuário e código de atribuição
function getAtribuicoesUsuario() {
    var registrosUsuario = [];
    for (var i = 0; i < db_curriculo.atribuicao.length; i++) {
        var registro = db_curriculo.atribuicao[i];
        if (registro.codusuario === usuarioCorrente.codigo) {
            registrosUsuario.push(registro);
        }
    }
    return registrosUsuario;
}

function obterFormacoesUsuario(usuario) {
    var registrosUsuario = [];
    for (var i = 0; i < db_curriculo.formacao.length; i++) {
        var registro = db_curriculo.formacao[i];
        if (registro.codusuario === usuario) {
            registrosUsuario.push(registro);
        }
    }
    return registrosUsuario;
}

function getFormacaoUser(codigoFormacao) {
    for (var i = 0; i < db_curriculo.formacao.length; i++) {
        var formacao = db_curriculo.formacao[i];
        if (formacao.codusuario === usuarioCorrente.codigo) {
            if (formacao.id === codigoFormacao) {
                return formacao; // Retorna o valor desejado
            }
            else {
                continue;
            }
        }
        else {
            continue;
        }
    }
}

