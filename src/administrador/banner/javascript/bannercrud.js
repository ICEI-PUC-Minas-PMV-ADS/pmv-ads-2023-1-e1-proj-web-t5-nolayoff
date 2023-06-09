const imageInput = document.querySelector('#newImage');
const fieldnumber = document.getElementById("removefield");
const fieldval = fieldnumber.value;
const previewFind = document.querySelector("preview");
const removeImageFind = document.querySelector("removeImage");
let imgdata = JSON.parse(localStorage.getItem('db_banner'));


let db_banner_inicial = [
  {
    'src': 'images\\robofilosofo.jpg',
  },
  {
    'src': 'images\\layoff-790x400.png'
  }
];

if (!imgdata) {
  imgdata = db_banner_inicial;
  localStorage.setItem('db_banner', JSON.stringify(imgdata));
}

function getuploadedImg() {
  const val = imageInput.value;

  if (val == "") {
    alert("Por favor, insira uma imagem.");
  } else {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      let newImage = {
        'src': reader.result,
      };
      imgdata.push(newImage);
      localStorage.setItem('db_banner', JSON.stringify(imgdata));
      alert('Imagem inserida com sucesso!');
      console.log(imgdata);
    });

    reader.readAsDataURL(imageInput.files[0]);
  }
}

function filterTest() {
  if (fieldval < 2 || fieldval > imgdata.length) {
    alert('Número inválido, insira um número entre 2 e ' + [imgdata.length] + '.');
  } else {
    imgdata.splice(fieldval, 1);
    if (imgdata.length === 0) {
      imgdata = db_banner_inicial;
      localStorage.setItem('db_banner', JSON.stringify(imgdata));
    }
    localStorage.setItem('db_banner', JSON.stringify(imgdata));
    console.log(imgdata);
    alert('Imagem removida com sucesso!');
  }
}

fieldnumber.addEventListener('input', () => {
  if (imgdata[fieldval] == undefined) {
    return
  } else {
    document.querySelector(".preview").src = imgdata[fieldval]['src'];
  }
})