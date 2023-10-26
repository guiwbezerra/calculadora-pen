const calculateButton = document.getElementById("calculate");//se um elemento com o ID especificado não estiver contido neste documento.
const lengthInput = document.getElementById("length");//entrada de comprimento
const positionInput = document.getElementById("position");//para a posição 
const velocityInput = document.getElementById("velocity");//para caluclar a velocidade
const accelerationInput = document.getElementById("acceleration");//para calcular a aceleração
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", function() {
    const length = parseFloat(lengthInput.value);//serve para analisar um documento
    const position = parseFloat(positionInput.value);
    const velocity = parseFloat(velocityInput.value);
    const acceleration = parseFloat(accelerationInput.value);

    if (!isNaN(length) && !isNaN(position) && !isNaN(velocity) && !isNaN(acceleration) && length > 0) {
        const g = 9.81;
        const period = 2 * Math.PI * Math.sqrt(length / g);
        resultDiv.innerHTML = `O período é de aproximadamente ${period.toFixed(2)} segundos.`;
    } else {
        resultDiv.innerHTML = "Por favor, insira valores válidos ";
    }
});