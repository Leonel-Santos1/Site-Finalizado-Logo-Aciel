const NameInputs = document.getElementById("name");
NameInputs.value = "";

const Canvas = document.getElementById("ImageContentCanvas").getContext("2d");

const image = new Image();

image.addEventListener("load", function () {

  Canvas.drawImage(image, 0, 0, 530, 420);

  NameInputs.addEventListener("keyup", (keyup) => {

    Canvas.clearRect(0, 0, 530, 420);
    Canvas.drawImage(image, 0, 0, 530, 420);


    const Pength = Canvas.measureText(NameInputs.value).width

    Canvas.fillStyle = "blue";
    Canvas.fillRect(2, 20, Pength + 5, 70);

    
    Canvas.fillStyle = "black";
    Canvas.font = "48px serif";
    Canvas.textAlign = "center"
    Canvas.fillText(NameInputs.value, 0, 70);
  });
});
image.src = "lulaNao.png";

// https://cristiantela.github.io/lula2turno/base.png

// document.getElementById("teste").innerText = NameInputs.value
// console.log("Valor ao ser pressionado pelo backspace", document.getElementById("teste"))

// document.getElementById("teste").innerText = Key
