const thumbs = document.querySelectorAll(".wrapper-thumbs img");
const captions = document.querySelectorAll(".wrapper-captions figure figcaption");
const mainImg = document.querySelector(".main-img img");
const arrowL = document.querySelector(".wrapper-controls .arrowL");
const arrowR = document.querySelector(".wrapper-controls .arrowR");

let i = 0;

arrowL.addEventListener("click", prev);
arrowR.addEventListener("click", next);
setInterval(next, 5000);

thumbs.forEach(function (thumb, index) {
  thumb.addEventListener("click", function () {
    changeImage(thumb);
    changeActive(index);
  });
});

function prev() {
  i = (i - 1 + thumbs.length) % thumbs.length;
  changeActive(i);
  changeImage(thumbs[i]);
}

function next() {
  i = (i + 1) % thumbs.length;
  changeActive(i);
  changeImage(thumbs[i]);
}

function changeActive(index) {
  thumbs.forEach(function (index) {
    if (index.classList.contains("active")) {
      index.classList.remove("active");
    }
  });
  captions.forEach(function (index) {
    if (index.classList.contains("active") && index.parentElement.classList.contains("active")) {
      index.classList.remove("active");
      index.parentElement.classList.remove("active");
    }
  });
  thumbs[index].classList.add("active");
  captions[index].classList.add("active");
  captions[index].parentElement.classList.add("active");
}

function changeImage(thumb) {
  mainImg.src = thumb.src;
  mainImg.classList.add("fade");
  setTimeout(function () {
    mainImg.classList.remove("fade");
  }, 1000);
}