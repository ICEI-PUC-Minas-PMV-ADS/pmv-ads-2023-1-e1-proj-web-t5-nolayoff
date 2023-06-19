const pfpInputObject = document.querySelector("#newPFP");
let pfpdata = JSON.parse(localStorage.getItem('pfp-image'));

if (!pfpdata) {
  pfpdata = [];
}



pfpInputObject.addEventListener('change', () => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      pfpdata.splice(0, 1);
      let newPFP = {
        'src': reader.result,
      };
      pfpdata.push(newPFP);
      localStorage.setItem('recent-images', JSON.stringify(pfpdata));
      alert('Imagem de Perfil inserida com sucesso!');
      console.log(pfpdata);

      document.querySelector("#pfpimg").src = pfpdata[0]['src'];
    })
    reader.readAsDataURL(pfpInputObject.files[0]);
});

function emulateClick() {
    pfpInputObject.click();
};

function removePFP() {
  pfpdata.splice(0, 1)
  localStorage.setItem('recent-images', JSON.stringify(pfpdata));
  document.querySelector("#pfpimg").src = ""
}