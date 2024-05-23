

document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = document.querySelectorAll('.navbar-burger');
  const navbarItems = document.querySelectorAll(".navbar-item");

  navbarBurgers.forEach(burger_el => {
      burger_el.addEventListener('click', () => {
          // Toggle burger-menu
          document.getElementById(burger_el.dataset.target).classList.toggle('is-active');
          $target.classList.toggle('is-active');
      });
      navbarItems.forEach(item => {
          item.addEventListener("click", () => {
              // Close burger-menu
              document.getElementById(burger_el.dataset.target).classList.remove('is-active');
              $target.classList.remove('is-active');
          });
      });
  });
});

 /* Mostrar / ocultar items */
function showFilters() {
  var x = document.getElementById("item-toggleable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
}




// Modal
// https://bulma.io/documentation/components/modal/#javascript-implementation-example
