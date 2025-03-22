function changeLetters() {

    let letters = document.querySelectorAll(".boy-text");
    let values = []; 

    for (let i = 0; i < letters.length; i++) {
        values.push(letters[i].innerText);
    }

    let lastValue = values.pop();
    values.unshift(lastValue);

    for (let i = 0; i < letters.length; i++) {
        letters[i].innerText = values[i];
    }
}

setInterval(changeLetters, 1000);
