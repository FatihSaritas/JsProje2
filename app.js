const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currrentActive = 1;

next.addEventListener("click", () => {
  currrentActive++;
  if (currrentActive > circles.length) {
    currrentActive = circles.length; //bu 1 den buyuk oldugu surece sonraki butonu çalışacak demektir.
  }
  update();
});

prev.addEventListener("click", () => {
  currrentActive--;

  if (currrentActive < 1) {
    currrentActive = 1; // 1 oluncaya kadar devam edecek önceki butonu
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currrentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  })
  const actives = document.querySelectorAll(".active");
  //console.log(actives.length, circles.length);
  //console.log((actives.length - 1) / (circles.length - 1) * 100);
  // aradaki yüzdelilk geçişleri bulmaya çalışıyoruz width için 

  //console.log((actives.length - 1) / (circles.length - 1) * 100 + "%");

  progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100 + "%");

  if (currrentActive == 1) {
    prev.disabled = true;
  } else if (currrentActive == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

}