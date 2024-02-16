const navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = function(){
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

const cartItem = document.querySelector(".header .cart-items-container");

document.querySelector("#cart-btn").onclick = function(){
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

const searchForm = document.querySelector(".header .search-form");

document.querySelector("#search-btn").onclick = function(){
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};
