const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", ];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let scrWords = document.getElementById('screen-words'),
    scrNumbers = document.getElementById('screen-numbers');
const validate = (btn) => {
    let val = btn.innerHTML.split(" / ");

    if (scrWords.innerHTML.length === numbers.length & scrNumbers.innerHTML.length === numbers.length) {
        return {
            "type": "finished"
        };
    }
    if (scrWords.innerHTML.length < numbers.length) {
        if (letters[scrWords.innerHTML.length] === val[0]) {
            return {
                "type": "letter",
                "value": val[0]
            }
        }
        return {
            "type": "error"
        };
    }
    if (scrWords.innerHTML.length === numbers.length & scrNumbers.innerHTML.length < numbers.length) {
        if (letters[scrNumbers.innerHTML.length] === val[0]) {
            return {
                "type": "number",
                "value": val[1]
            }
        }
        return {
            "type": "error"
        };
    }




}
const add = (btn) => {
    const val = validate(btn);
    switch (val["type"]) {
        case ("error"):
            alert('Ey bro ese caracter ya esta observa la pantalla');
            break;
        case ("letter"):
            scrWords.innerHTML += val["value"];
            break;
        case ("number"):
            scrNumbers.innerHTML += val["value"];
            break;
        case ("finished"):
            alert('I Forget implemet this');
            break;
    }
}
const draw = () => {
    for (const [index, element] of letters.entries()) {

        let btn = document.createElement('button');
        btn.setAttribute("id", `${numbers[element]}`)
        btn.innerHTML = `${element} / ${numbers[index]}`;
        btn.addEventListener("click", () => {
            add(btn);
        });
        let div = document.getElementById('btns');
        if (index % 4 === 0) {
            let br = document.createElement("br");
            div.appendChild(br);
        }
        div.appendChild(btn);
    }
}



draw();