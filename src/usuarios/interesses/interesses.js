var db = {
    interesses: [
        {
            "id": 1,
            "idusuario" : "89050a4a-3e3e-476c-8e24-e22783736544" ,
            "codigovaga": 1,       
        },
        {
            "id": 2,
            "idusuario" : "89050a4a-3e3e-476c-8e24-e22783736544" ,
            "codigovaga": 5,       
        },  
        {
            "id": 3,
            "idusuario" : "89050a4a-3e3e-476c-8e24-e22783736544" ,
            "codigovaga": 9,       
        },       
        {
            "id": 4,
            "idusuario" : "89050a4a-3e3e-476c-8e24-e22783736544" ,
            "codigovaga": 8,       
        }, 
        {
            "id": 5,
            "idusuario" : "89050a4a-3e3e-476c-8e24-e22783736544" ,
            "codigovaga": 10,       
        },             
    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbinteresses = JSON.parse(localStorage.getItem('db_interesses'));
if (!dbinteresses) {
    dbinteresses = db;
};

function insertInteresses(idvaga,idusuario) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (dbinteresses.interesses.length != 0) 
      novoId = dbinteresses.interesses[dbinteresses.interesses.length - 1].id + 1;
    let novoiteresse = {
        "id": novoId,
        "idusuario": idusuario,
        "idvaga" : idvaga,
    };

    // Insere o novo objeto no array
    dbinteresses.interesses.push(novoiteresse);

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
}

function updateInteresses(idvaga, idusuario) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbinteresses.interesses.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbinteresses.interesses[index].idusuario = vaga.descricao,
    dbinteresses.interesses[index].idvaga = vaga.empresa,

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
}
function deleteInteresse(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbinteresses.interesses = dbinteresses.interesses.filter(function (element) { return element.id != id });
    // Atualiza os dados no Local Storage
    localStorage.setItem('db_interesses', JSON.stringify(dbinteresses));
}




