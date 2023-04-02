function Draw() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    // Define o tamanho do retângulo
    const rectWidth = 400;
    const rectHeight = 200;

    // Define o raio dos cantos arredondados
    const cornerRadius = 20;

    // Define a posição do retângulo
    const rectX = canvas.width / 2 - rectWidth / 2;
    const rectY = canvas.height / 2 - rectHeight / 2;

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
    ctx.fillStyle = 'blue';
    ctx.fill();
}

// Proximo Passo: Inclinar a escrita, ou ao menos deixar pronto para isso