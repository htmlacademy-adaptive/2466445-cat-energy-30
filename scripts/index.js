var e=document.querySelector(".header__nav"),s=document.querySelector(".header__toggle");e.classList.remove("header__nav--nojs");s.classList.remove("header__toggle--nojs");s.addEventListener("click",()=>{e.classList.contains("header__nav--opened")?(e.classList.remove("header__nav--opened"),s.classList.remove("button-burger--closed")):(e.classList.add("header__nav--opened"),s.classList.add("button-burger--closed"))});
