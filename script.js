const NameInputs = document.getElementById("name");
NameInputs.value = "";

const Canvas = document.getElementById("ImageContentCanvas").getContext("2d");

const image = new Image();

image.addEventListener("load", function () {

  Canvas.drawImage(image, 0, 0, 530, 420);


  NameInputs.addEventListener("keyup", (keyup) => {

    WriteTextCanvas(NameInputs);

    Canvas.clearRect(0, 0, 530, 420);
    Canvas.drawImage(image, 0, 0, 530, 420);

    WriteTextCanvas(NameInputs);

  });
});

image.src = "lulaNao.png";

function WriteTextCanvas(NameInputs) {
  const Pength = Canvas.measureText(NameInputs.value + "a").width
  Canvas.fillStyle = "blue";

  // Define o tamanho do retângulo
  const rectHeight = 100;

  // Define o raio dos cantos arredondados
  const cornerRadius = 20;

  // Define a posição do retângulo
  const rectX = Canvas.width / 2 - Pength / 2;
  const rectY = Canvas.height / 2 - rectHeight / 2;

  // Desenha o retângulo com cantos arredondados
  Canvas.beginPath();
  Canvas.lineTo(rectX + Pength - cornerRadius, rectY);
  Canvas.arcTo(rectX + Pength, rectY, rectX + Pength, rectY + cornerRadius, cornerRadius);
  Canvas.lineTo(rectX + Pength, rectY + rectHeight - cornerRadius);
  Canvas.arcTo(rectX + Pength, rectY + rectHeight, rectX + Pength - cornerRadius, rectY + rectHeight, cornerRadius);
  Canvas.lineTo(rectX + cornerRadius, rectY + rectHeight);
  Canvas.arcTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - cornerRadius, cornerRadius);
  Canvas.lineTo(rectX, rectY + cornerRadius);
  Canvas.arcTo(rectX, rectY, rectX + cornerRadius, rectY, cornerRadius);
  Canvas.closePath();
  Canvas.fillStyle = 'blue';
  Canvas.fill();
  Canvas.fillRect(2, 20, Pength, 70);


  Canvas.fillStyle = "black";
  Canvas.font = "48px serif";

  Canvas.fillText(" " + NameInputs.value + "", 0, 70);

  


}