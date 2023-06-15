var db_banner_inicial = {
    "banner": [
        {
            "id": 1,
            "descricao": "Noticia 1 ",
            'caminho' :"images/banner/banner1.jpg",
            "ativo" : 'true'
        },
        {
            "id": 2,
            "descricao": "Noticia 2 ",
            'caminho' :"images/banner/banner2.jpg",
            "ativo" : 'true'
        },
        {
            "id": 3,
            "descricao": "Noticia 3 ",
            'caminho' :"/images/layoff-790x400.png",
            "ativo" : 'true'
        },
    
    ]
}

var getInput = document.getElementById('imageupload');
var getImg = document.getElementsByClassName('imgdiv');
var form = document.getElementById('container');
var descElement = document.getElementById('descricao_banner');
var descValue = descElement.value;
var insertedImg = getInput.files[0];

const source = URL.createObjectURL(insertedImg);

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbbanner = JSON.parse(localStorage.getItem('db_banner'));
if (!dbbanner) {
    dbbanner = db_banner_inicial
    localStorage.setItem('db_banner', JSON.stringify(dbbanner)); //Coloquei isso para aparecer no LocalStorage -H
};

//Detecta o clique do usuário e esconde ou mostra o div -H
function showorhide() {
    if (form.style.display === "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none"
    }
}

// Detecta o click do usuário e o simula no input de arquivos -H
function inputTrigger() {
    getInput.click();
}

// Detecta quando um arquivo é inserido e muda a src da imagem para o demonstrar -H
function imgPreview() {
    const source = URL.createObjectURL(insertedImg);

    window.open(source);
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertBanner() {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (dbbanner.banner.length != 0) 
      novoId = dbbanner.banner[dbbanner.banner.length - 1].id + 1;
    let novoBanner = {
        "id": novoId,
        "descricao": descElement.value,
        "caminho" : source,
        "ativo": true,
    }; //"ATIVO": TRUE É UM PLACEHOLDER, TROCAR DEPOIS

    // Insere o novo objeto no array
    dbbanner.banner.push(novoBanner);
    displayMessage("Banner inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_banner', JSON.stringify(dbbanner));
}

// CÓDIGO ORIGINAL:
// function insertBanner(banner) {
//     // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
//     let novoId = 1;
//     if (dbbanner.banner.length != 0) 
//       novoId = dbbanner.banner[dbbanner.banner.length - 1].id + 1;
//     let novoBanner = {
//         "id": novoId,
//         "descricao": banner.descricao,
//         "caminho" : banner.caminho,
//         "ativo": banner.ativo,
//     };

//     // Insere o novo objeto no array
//     dbbanner.banner.push(novoBanner);
//     displayMessage("Banner inserido com sucesso");

//     // Atualiza os dados no Local Storage
//     localStorage.setItem('db_banner', JSON.stringify(dbbanner));
// }

function updateBanner(id, banner) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbbanner.banner.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbbanner.banner[index].descricao = banner.descricao,
    dbbanner.banner[index].empresa = banner.empresa,
    dbbanner.banner[index].observacao = banner.observacao,
    dbbanner.banner[index].duracao = banner.duracao,
    dbbanner.banner[index].tipoensino = banner.tipoensino,
    dbbanner.banner[index].email = banner.email,
    dbbanner.banner[index].telefone = banner.telefone,
    dbbanner.banner[index].website = banner.website

    displayMessage("Banner alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_banner', JSON.stringify(dbbanner));
}

function deleteBanner(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbbanner.banner = dbbanner.banner.filter(function (element) { return element.id != id });

    displayMessage("Banner removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_banner', JSON.stringify(dbbanner));
}