(() => {

    const backToTop = document.querySelector(".backToTop");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 10) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    })

})();