const NameInput = document.getElementById("name")
NameInput.value = ""

const Name = document.getElementById("teste")

const botaoDownload = document.getElementById('botaoDownload');
const ImageShare = document.getElementById('shareContent');

const minhaDiv = document.getElementById("ContentCanvas")

NameInput.addEventListener("keyup", (keyup) => {
    Name.innerText = NameInput.value.toUpperCase()
})

botaoDownload.addEventListener("click", function salvarImagem() {
    html2canvas(document.querySelector(".ContentCanvas")).then(function (canvas) {
        canvas.toBlob(function (blob) {
            saveAs(blob, "imagem.png");
        });
    });
})

ImageShare.addEventListener("click", () =>{
    html2canvas(document.querySelector(".ContentCanvas")).then((canvas)=>{
        const urlImagem = canvas.toDataURL();

        navigator.clipboard.writeText(urlImagem)
    })
})

