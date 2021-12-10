function changeBackgroundColor() {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');

    const redHex = Number(redSlider.value).toString(16);
    const greenHex = Number(greenSlider.value).toString(16);
    const blueHex = Number(blueSlider.value).toString(16);

    console.log(redHex, greenHex, blueHex);

    const hexColor = '#' + redHex + greenHex + blueHex;

    document.body.style.backgroundColor = hexColor;
}
