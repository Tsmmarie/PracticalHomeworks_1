let btn = document.getElementById('button');

function changeBackgroundColor() {
    const colorInput = document.getElementById('colorInput').value.toLowerCase();
    const validColors = ['red', 'blue', 'green', 'black', 'white'];

    if (validColors.includes(colorInput)) {
        document.body.style.backgroundColor = colorInput; // შეცვლილია სწორად
    } else {
        alert('მიუწვდომელია ფერი! გთხოვ შეიყვანე ერთ-ერთი ფერი: red, blue, green, black, white.');
    }
}

btn.addEventListener('click', changeBackgroundColor);
