function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll("section[id]");
console.log(sections);
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      try {
        document
          .querySelector(".navbar a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } catch (e) {
        return;
      }
    } else {
      try {
        document
          .querySelector(".navbar a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      } catch (e) {
        return;
      }
    }
  });
}
window.addEventListener("scroll", scrollActive);

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    console.log("ok");
    $(".a").fadeOut();
  } else {
    $(".a").fadeIn();
  }
});
