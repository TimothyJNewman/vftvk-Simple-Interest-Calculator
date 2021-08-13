function compute() {
  p = document.getElementById("principal").value;
  r = document.getElementById("rate").value;
  t = document.getElementById("years").value;
  res = document.getElementById("result");
  errorRef = document.getElementById("errorMessage");
  if (p == "" || r == "" || "") {
    res.style.display = "none";
    window.alert("Please enter a principle");
    document.getElementById("principal").focus();
  } else if (!(parseFloat(p) > 0)) {
    res.style.display = "none";
    window.alert("Please enter a positive principle");
    document.getElementById("principal").focus();
  } else if (!(parseFloat(r) > 0)) {
    res.style.display = "none";
    window.alert("Please enter a positive rate");
    document.getElementById("rate").focus();
  } else {
    resultMessage = ""
    resultMessage += "If you deposit <span>" + p + "</span>, \n";
    resultMessage += "at an interest rate of <span>" + r + "%</span>. \n";
    resultMessage += "You will reveive an amount of <span>" + Math.round(p * (r / 100 * t)) + "</span>, \n";
    resultMessage += "in the year <span>" + t + "</span>";
    res.innerHTML = resultMessage;
    res.style.display = "block";
  }

}

function setSelectedRate() {
  r = document.getElementById("rate").value;
  document.getElementById("selectedRate").innerText = r + "% ";
}