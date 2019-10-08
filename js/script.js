window.onload = function(){
  const header = document.querySelector("header");

  const btnlink = document.querySelectorAll("a[href='#']");
  btnlink.forEach(function(i){
    i.addEventListener("click", function(event){
      event.preventDefault();
    })
  })
  

  const toggler = document.querySelector(".menu_toggler");
  const navbar = document.querySelector(".nav_bar");
  toggler.addEventListener('click', function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active_btn");
  })

  const tohome = document.querySelector(".tohome");
  tohome.addEventListener("click",function(){
    window.scroll(0, 0);
  })

  const toskills = document.querySelector(".toskills");
  toskills.addEventListener("click",function(){
    let skills_top = document.querySelector("#skills").offsetTop - header.offsetHeight;
    window.scroll(0, skills_top);
  })

  const toportfolio = document.querySelector(".toportfolio");
  toportfolio.addEventListener("click",function(){
    let portfolio_top = document.querySelector("#portfolio").offsetTop - header.offsetHeight;
    window.scroll(0, portfolio_top);
  })

  const tocontact = document.querySelector(".tocontact");
  tocontact.addEventListener("click",function(){
    let contact_top = document.querySelector("#contact").offsetTop - header.offsetHeight;
    window.scroll(0, contact_top);
  })

  window.onscroll = function(){
    if (window.pageYOffset > header.offsetTop){
      header.classList.add("fixed_header");
    }
    else{
      header.classList.remove("fixed_header");
    }
  }

  const copyright = document.querySelector(".copyright");
  let date = new Date();
  let year = date.getFullYear();
  copyright.innerHTML = "©"+year;
}