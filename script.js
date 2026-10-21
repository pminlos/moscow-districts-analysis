function showName() {
    let name = document.getElementById("visitorName").value;
    document.getElementById("hello").innerText = "Привет, " + name + "!";
}

function find_edit() {
    document.getElementById("surname2").innerText = "Minlos";
    document.getElementById("name2").innerText = "Petr";
    document.getElementById("birthyear2").innerText = "2007";
}

function solve() {
    let aText = document.getElementById("a").value;
    let hText = document.getElementById("h").value;
    let rText = document.getElementById("r").value;
    let mText = document.getElementById("m").value;

    let a = Number(aText);
    let h = Number(hText);
    let r = Number(rText);
    let m = Number(mText);

    if (aText === "" || hText === "" || rText === "" || mText === "" ||
        a <= 0 || h <= 0 || r <= 0 || m < 0 ||
        isNaN(a) || isNaN(h) || isNaN(r) || isNaN(m)) {
        document.getElementById("answer").innerText = "Введите правильные числа";
        return;
    }

    let v1 = a * a * a;
    let v2 = Math.PI * r * r * h;
    let result;

    if (m <= v1 && m <= v2) {
        result = "Жидкость поместится в обе ёмкости";
    } else if (m <= v1) {
        result = "Жидкость поместится только в куб";
    } else if (m <= v2) {
        result = "Жидкость поместится только в цилиндр";
    } else {
        result = "Жидкость не поместится ни в одну ёмкость";
    }

    document.getElementById("answer").innerText = result;
}

let nameButton = document.getElementById("showNameBtn");
if (nameButton) {
    nameButton.addEventListener("click", showName);
}

let translitButton = document.getElementById("for_click");
if (translitButton) {
    translitButton.addEventListener("click", find_edit);
}

let solveButton = document.getElementById("solveBtn");
if (solveButton) {
    solveButton.addEventListener("click", solve);
}
