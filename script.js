const dollarInput = document.getElementById("dollarInput");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const rateInput = document.getElementById("rateInput");
const rateLabel = document.getElementById("rateLabel");

// Approximate USD -> EGP rate. Adjust in the "Exchange rate" field below the
// form if you want to test with a different value — no reload needed.
let rate = 48.5;
rateInput.value = rate;
rateLabel.textContent = rate;

rateInput.addEventListener("input", () => {
  const value = parseFloat(rateInput.value);
  if (!isNaN(value) && value > 0) {
    rate = value;
    rateLabel.textContent = rate;
  }
});

function convert() {
  const amount = parseFloat(dollarInput.value);

  if (dollarInput.value.trim() === "" || isNaN(amount)) {
    result.textContent = "Please enter a valid number.";
    result.className = "error";
    return;
  }
  if (amount < 0) {
    result.textContent = "Amount can't be negative.";
    result.className = "error";
    return;
  }

  const egp = amount * rate;
  result.textContent = `$${amount.toLocaleString()} = ${egp.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })} EGP`;
  result.className = "success";
}

convertBtn.addEventListener("click", convert);
dollarInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") convert();
});
