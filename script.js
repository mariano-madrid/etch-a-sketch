let squareGrid = document.querySelector("#container");
document.addEventListener('DOMContentLoaded', modifyGrid());

function modifyGrid(){
    let rangeValue = document.getElementById("range").value;
    let rangeIndicator = document.getElementById("rangeIndicator");
    rangeIndicator.textContent = rangeValue;

    squareGrid.textContent = '';

    for(let i = 0; i < rangeValue*rangeValue; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        div.style.width = `${500/rangeValue}px`
        squareGrid.appendChild(div);
    }

    let divColored = document.querySelectorAll("#container div");
    
    divColored.forEach(div => {
        div.addEventListener('mouseover', (event) => {
            div.style.backgroundColor = randomColor();
        })
    });
}

function randomColor(){
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);

    return `rgb(${num1}, ${num2}, ${num3})`;
}