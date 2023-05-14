var db_cursos_inicial = {
    "data": [
        {
            "id": 1,
            "descricao": "Design Gráfico e UI/UX ",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Escola de Design",
            "tipoensino": "presencial",
            "email": "escoladesign@escoladesign.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        },
        {
            "id": 2,
            "descricao": "Design Gráfico e UI/UX ",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Udemy",
            "tipoensino": "virtual",
            "email": "Udemy@Udemy.email.com",
            "telefone": "33-564-736-2900",
            "website": "Udemy.org"
        },
        {
            "id": 3,
            "descricao": "Banco de Dados",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Udemy",
            "tipoensino": "presencial",
            "email": "Udemy@Udemy.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        },
        {
            "id": 4,
            "descricao": "Governança de TI",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Trainning",
            "tipoensino": "virtual",
            "email": "trainning@trainning.email.com",
            "telefone": "31-3866-736-8031",
            "website": "trainning.org"
        },
        {
            "id": 5,
            "descricao": "Segurança de dados e informação",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "PUC-MG",
            "tipoensino": "virtual",
            "email": "puc@puc.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        },
        {
            "id": 6,
            "descricao": "Design Gráfico e UI/UX ",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Udemy",
            "tipoensino": "presencial",
            "email": "Udemy@Udemy.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        },
        {
            "id": 7,
            "descricao": "Design Gráfico e UI/UX ",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Udemy",
            "tipoensino": "virtual",
            "email": "Udemy@Udemy.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        },
        {
            "id": 8,
            "descricao": "Design Gráfico e UI/UX ",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Udemy",
            "tipoensino": "virtual",
            "email": "Udemy@Udemy.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        },
        {
            "id": 9,
            "descricao": "Design Gráfico e UI/UX ",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Udemy",
            "tipoensino": "virtual",
            "email": "Udemy@Udemy.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        },
        {
            "id": 10,
            "descricao": "Design Gráfico e UI/UX ",
            'observacao' :"",
            "duracao": "30 horas",
            "empresa": "Udemy",
            "tipoensino": "presencial",
            "email": "Udemy@Udemy.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_cursos'));
if (!db) {
    db = db_cursos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCurso(curso) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoCurso = {
        "id": novoId,
        "descricao": curso.descricao,
        "observacao" : curso.observacao,
        "duracao": curso.duracao,
        "empresa" : curso.empresa,
        "tipoensino": curso.tipoensino,
        "email" : curso.email,
        "telefone": curso.telefone,
        "website": curso.website
    };

    // Insere o novo objeto no array
    db.data.push(novoCurso);
    displayMessage("Curso inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cursos', JSON.stringify(db));
}

function updateCurso(id, curso) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].descricao = curso.descricao,
    db.data[index].empresa = curso.empresa,
    db.data[index].observacao = curso.observacao,
    db.data[index].duracao = curso.duracao,
    db.data[index].tipoensino = curso.tipoensino,
    db.data[index].email = curso.email,
    db.data[index].telefone = curso.telefone,
    db.data[index].website = curso.website

    displayMessage("Curso alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cursos', JSON.stringify(db));
}

function deleteCurso(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Curso removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cursos', JSON.stringify(db));
}