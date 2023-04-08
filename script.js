/* select entry Name */
const NameInput = document.getElementById("name")
NameInput.value = ""

/* select entry NamePersonalize */
const NamePersonalize = document.getElementById("NamePersonalize")

/* select entry downloadContent and shareContent */
const downloadContent = document.getElementById('downloadContent');
const ImageShare = document.getElementById('shareContent');


/* select entry ButtonsMasc, ButtonFem, ImagemProf, ImagemProfa */
const ButtonMasc = document.getElementById("ButtonMasc")
const ButtonFem = document.getElementById("ButtonFem")
const ImagemProf = document.getElementById("ImagemProf")
const ImagemProfa = document.getElementById("ImagemProfa")

/* select entry of ContentCanvas */
const minhaDiv = document.querySelector(".ContentCanvas")

/* ------------------------------------------------------- */

/* Adds a Click Event that Temoves a Class and Adds Another */
ButtonFem.addEventListener("click", () => {

    ImagemProf.classList.add("desactive")
    ImagemProfa.classList.remove("desactive")

    ButtonFem.classList.add("SelectFem")
    ButtonMasc.classList.remove("SelectMasc")
}
)

ButtonMasc.addEventListener("click", () => {


    ImagemProf.classList.remove("desactive")

    if (ImagemProfa.className != "desactive") {
        ImagemProfa.classList.add("desactive")
    }

    ButtonMasc.classList.add("SelectMasc")
    ButtonFem.classList.remove("SelectFem")
}
)

/* ------------------------------------------------------- */

/* Customize Name in Real Time */
NameInput.addEventListener("keyup", (keyup) => {
    NamePersonalize.innerText = NameInput.value.toUpperCase()
})
/* ------------------------------------------------------- */

/* Adds a Click Event that Content Download Occurs */
downloadContent.addEventListener("click", function DownloadImage() {
    html2canvas(document.querySelector(".ContentCanvas")).then(function (canvas) {
        canvas.toBlob(function (blob) {
            saveAs(blob, "PazAmorGeografia.jpg");
        });
    });
})

/* Adds a Click Event that Content Sharing Occurs */
ImageShare.addEventListener("click", () => {
    html2canvas(document.querySelector(".ContentCanvas")).then((canvas) => {
        canvas.toBlob(blob => {
            // Cria um objeto shareData com as informações a serem compartilhadas
            const shareData = {
                files: [new File([blob], "PazAmorGeografia.jpg", { type: "image/jpeg" })]
            };

            // Chama a API Web Share para compartilhar a imagem
            navigator.clipboard.writeText(shareData)
            navigator.share(shareData)
                .then(() => console.log("Compartilhado com sucesso!"))
                .catch(error => console.error("Erro ao compartilhar:", error));
        }, "image/jpeg", 0.9);
    })
})