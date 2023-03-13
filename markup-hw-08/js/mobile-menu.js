(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const pageHeader = document.querySelector(".page-header");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    pageHeader.classList.toggle("is-mobile");
    mobileMenuRef.classList.toggle("is-mobile");
    document.body.classList.toggle("no-scroll");
  });
})();