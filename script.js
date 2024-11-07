function togglemenu() {
  const navMenu = document.querySelector(".header-navigation ul");
  navMenu.classList.toggle("show");
}

const searchButton = document.querySelector(".search-button");
const searchForm = document.querySelector("#searchForm");

searchButton.addEventListener("click", () => {
  searchForm.classList.toggle("show");
});
