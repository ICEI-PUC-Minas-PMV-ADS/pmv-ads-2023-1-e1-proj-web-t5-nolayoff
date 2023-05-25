var db_cursos_inicial = {
    "cursos": [
        {
            "id": 1,
            "descricao": "Design Gráfico e UI/UX ",
            'observacao' :"Aprenda Photoshop, Illustrator, InDesign, XD e Adobe Portfólio. São projetos incríveis para você aprender e praticar.",
            "duracao": "30 horas",
            "empresa": "Udemy",
            "tipoensino": "presencial",
            "email": "escoladesign@escoladesign.email.com",
            "telefone": "31-322-736-8031",
            "website": "Udemy.org"
        },
        {
            "id": 2,
            "descricao": "Gestão da Tecnologia da Informação.",
            'observacao' :"Sistemas de Informação e Gestão de TI",
            "duracao": "55 horas",
            "empresa": "Udemy",
            "tipoensino": "virtual",
            "email": "Udemy@Udemy.email.com",
            "telefone": "33-564-736-2900",
            "website": "Udemy.org"
        },
        {
            "id": 3,
            "descricao": "Banco de Dados",
            'observacao' :"Cientista de Dados: Alta demanda e crescente oferta",
            "duracao": "60 horas",
            "empresa": "ebaconline",
            "tipoensino": "virtual",
            "email": "ebaconline@ebaconline.email.com",
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
var dbcursos = JSON.parse(localStorage.getItem('db_cursos'));
if (!dbcursos) {
    dbcursos = db_cursos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCurso(curso) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (dbcursos.cursos.length != 0) 
      novoId = dbcursos.cursos[dbcursos.cursos.length - 1].id + 1;
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
    dbcursos.cursos.push(novoCurso);
    displayMessage("Curso inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cursos', JSON.stringify(dbcursos));
}

function updateCurso(id, curso) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbcursos.cursos.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbcursos.cursos[index].descricao = curso.descricao,
    dbcursos.cursos[index].empresa = curso.empresa,
    dbcursos.cursos[index].observacao = curso.observacao,
    dbcursos.cursos[index].duracao = curso.duracao,
    dbcursos.cursos[index].tipoensino = curso.tipoensino,
    dbcursos.cursos[index].email = curso.email,
    dbcursos.cursos[index].telefone = curso.telefone,
    dbcursos.cursos[index].website = curso.website

    displayMessage("Curso alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cursos', JSON.stringify(dbcursos));
}

function deleteCurso(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbcursos.cursos = dbcursos.cursos.filter(function (element) { return element.id != id });

    displayMessage("Curso removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cursos', JSON.stringify(dbcursos));
}