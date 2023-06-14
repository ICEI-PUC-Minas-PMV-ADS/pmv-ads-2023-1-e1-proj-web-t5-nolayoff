const btnPrev = document.querySelector('.btnprev');
const btnNext = document.querySelector('.btnext');
const banner = document.querySelector('.banner');
const imgdata = JSON.parse(localStorage.getItem('db_banner'));
const imgLength = imgdata.length - 1;
const srcHolder = document.querySelector('.bannerimg');
let am = 0;

const circle0identifier = document.querySelector('.circle0identifier');

// Criar e colocar mais círculos
for (let i = 0; i < imgdata.length - 1; i++) {
    const clone = circle0identifier.cloneNode(true);
    clone.id = 'circle' + (i + 1) + 'identifier';
    banner.appendChild(clone);
}

// Preenchimento de círculo padrão
circle0identifier.style.backgroundColor = "rgba(158, 158, 158, 1)";

// Funcionalidade para o botão da imagem prévia
btnPrev.addEventListener('click', () => {
    let currentCircle = document.querySelector('#circle' + am + 'identifier');
    let lastCircle = document.querySelector('#circle' + (imgdata.length - 1) + 'identifier');
    let nextCircle = document.querySelector('#circle' + (am - 1) + 'identifier');
    if (am <= 0) {
        am = imgLength;
        lastCircle.style.backgroundColor = "rgba(158, 158, 158)";
        circle0identifier.style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.querySelector('#circle1identifier').style.backgroundColor = "rgba(0, 0, 0, 0)";
    } else {
        am--;
        currentCircle.style.backgroundColor = "rgba(0, 0, 0, 0)";
        if (nextCircle == null) {
            circle0identifier.style.backgroundColor = "rgba(158, 158, 158, 1)";
        } else {
            nextCircle.style.backgroundColor = "rgb(158, 158, 158)";
        }
    }
    console.log(nextCircle)
    srcHolder.src = imgdata[am]['src'];
});

// Funcionalidade para o botão da próxima imagem
btnNext.addEventListener('click', function () {
    if (am >= imgLength) {
        am = 0;
    } else {
        am++;
    }
    srcHolder.src = imgdata[am]['src'];
    console.log(am);
});

// Source original
if (srcHolder.src = "#") {
    srcHolder.src = imgdata[0]['src'];
}