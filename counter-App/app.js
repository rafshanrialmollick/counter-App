const input = document.getElementById("input");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const resetBtn = document.getElementById("reset");

btn2.addEventListener("click", () => {
  input.value++;
});

btn1.addEventListener("click", (e) => {
  if (input.value > 0) {
    input.value--;
  }
});

resetBtn.addEventListener("click", () => {
  input.value = 0;
});
