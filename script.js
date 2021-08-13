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
    resultMessage = ""
    resultMessage += "If you deposit <span>" + p + "</span>, \n";
    resultMessage += "at an interest rate of <span>" + r + "%</span>. \n";
    resultMessage += "You will reveive an amount of <span>" + Math.round(p * (r / 100 * t)) + "</span>, \n";
    resultMessage += "in the year <span>" + t + "</span>";
    res.innerHTML = resultMessage;
  }

}

function setSelectedRate() {
  r = document.getElementById("rate").value;
  document.getElementById("selectedRate").innerText = r + "% ";
}