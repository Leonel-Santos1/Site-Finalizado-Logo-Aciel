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
            canvas.toBlob(blob => {
              // Cria um objeto shareData com as informações a serem compartilhadas
              const shareData = {
                files: [new File([blob], "minha-imagem.jpg", { type: "image/jpeg" })]
              };
          
              // Chama a API Web Share para compartilhar a imagem
              navigator.share(shareData)
                .then(() => console.log("Compartilhado com sucesso!"))
                .catch(error => console.error("Erro ao compartilhar:", error));
            }, "image/jpeg", 0.9);
    })
})

