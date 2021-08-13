function compute() {
  p = document.getElementById("principal").value;
  r = document.getElementById("rate").value;
  t = document.getElementById("years").value;
  res = document.getElementById("result");
  errorRef = document.getElementById("errorMessage");
  if (p == "" || r == "" || "") {
    res.innerText = "";
    errorRef.innerText = "Missing Values";
    errorRef.style.display = "block";
  } else {
    if (errorRef.style.display == "block") {
      errorRef.style.display == "none";
    }
    res.innerText = Math.round(p * (r / 100 * t));
  }

}

function setSelectedRate() {
  r = document.getElementById("rate").value;
  document.getElementById("selectedRate").innerText = r + "% ";
}