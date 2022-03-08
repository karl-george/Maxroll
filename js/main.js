// let timer;
// let slideIndex = 1;
// const slides = document.getElementsByClassName("carousel-item");
// const swipers = document.getElementsByClassName("swiper");
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
//   console.log(slideIndex);
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;

//   if (n > slides.length) {
//     slideIndex = 1;
//   }

//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < swipers.length; i++) {
//     swipers[i].className = swipers[i].className.replace(" swiper-selected", "");
//   }

//   slides[slideIndex - 1].style.display = "block";
//   swipers[slideIndex - 1].classList.add("swiper-selected");

//   clearTimeout(timer);
//   timer = setTimeout(() => plusSlides(1), 6000);
// }

// for (let swiper in swipers) {
//   swipers[swiper].onclick = function (e) {
//     let index = swipers[swiper].dataset.index;

//     goToSlide(index);
//   };
// }

// function goToSlide(index) {
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < swipers.length; i++) {
//     swipers[i].className = swipers[i].className.replace(" swiper-selected", "");
//   }

//   slides[index - 1].style.display = "block";
//   swipers[index - 1].classList.add("swiper-selected");

//   clearTimeout(timer);
//   timer = setTimeout(() => plusSlides(-1), 6000);
// }

// Tiny Slider js
let slider = tns({
  container: ".my-slider",
  slideBy: "1",
  speed: 400,
  nav: false,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  responsive: {
    1200: {
      items: 4,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
  },
});
