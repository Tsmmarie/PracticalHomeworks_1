const btn = document.getElementById('averageButton');

function calculateAverage() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(':').map(Number); // რიცხვების მასივი

    if (numbers.some(isNaN)) {  // თუ რომელიმე ელემენტი რიცხვი არაა
        alert('გთხოვ, შეიყვანე მხოლოდ რიცხვები ":"-ით გამოყოფილად!');
        return;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    document.getElementById('result').textContent = `საშუალო: ${average}`;
}

btn.addEventListener('click', calculateAverage);
