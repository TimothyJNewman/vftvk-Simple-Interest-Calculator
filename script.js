function compute() {
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    if (p == undefined || r == undefined || undefined) {
        const errorMessageP = document.createElement("p");
        const errorMessageText = document.createTextNode("Incomplete Info");
        errorMessageP.appendChild(errorMessageText);
        document.body.appendChild(errorMessageP);
    } else {
        res = document.getElementById("result");
        res.value = p * (r / 100 * t);
    }

}
