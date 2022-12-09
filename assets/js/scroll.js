window.onload = function () {
  console.log("scroll.js loaded");
  var prevScrollpos = window.pageYOffset;
  function scrollHeader() {
    var currentScrollPos = window.pageYOffset;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.display = "flex";
      } else {
        document.getElementById("navbar").style.display = "none";
      }
      prevScrollpos = currentScrollPos;
    }

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
};
