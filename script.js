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

image.src = "./Imagens/Slide4.jfif";

function WriteTextCanvas(NameInputs) {
  Draw(NameInputs)

  Canvas.fillStyle = "black";
  Canvas.font = "48px serif";

  Canvas.fillText(" " + NameInputs.value.toUpperCase() + "", 0, 70);
}

function Draw(NameInputs){
  const Pength = Canvas.measureText(NameInputs.value.toUpperCase() + " ").width

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  // Define o tamanho do retângulo
  const rectWidth = Pength;
  const rectHeight = 70;

  // Define o raio dos cantos arredondados
  const cornerRadius = 20;

  // Define a posição do retângulo
  const rectX = 5;
  const rectY = 20;

  // Desenha o retângulo com cantos arredondados
  ctx.beginPath();
  ctx.moveTo(rectX + cornerRadius, rectY);
  ctx.lineTo(rectX + rectWidth - cornerRadius, rectY);
  ctx.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius);
  ctx.lineTo(rectX + rectWidth, rectY + rectHeight - cornerRadius);
  ctx.arcTo(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - cornerRadius, rectY + rectHeight, cornerRadius);
  ctx.lineTo(rectX + cornerRadius, rectY + rectHeight);
  ctx.arcTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - cornerRadius, cornerRadius);
  ctx.lineTo(rectX, rectY + cornerRadius);
  ctx.arcTo(rectX, rectY, rectX + cornerRadius, rectY, cornerRadius);
  ctx.closePath();
  ctx.fillStyle = '#00d20b';
  ctx.fill();
}