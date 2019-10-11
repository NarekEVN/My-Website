window.onload = function(){
  const header = document.querySelector("header");
  const top = document.querySelector(".top");
  
  top.addEventListener('click', function(){
    window.scroll(0,0);
  })

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

  scrollbtns(".toskills", "#skills");
  scrollbtns(".toportfolio", "#portfolio");
  scrollbtns(".tocontact", "#contact");
  scrollbtns(".tohome", ".bg");

  function scrollbtns(link, element){
    const toelement = document.querySelector(link);
    toelement.addEventListener("click", function(){
      let top = document.querySelector(element).offsetTop - header.offsetHeight;
      window.scroll(0, top);
    })
    
  }

  window.onscroll = function(){
    if (window.pageYOffset > header.offsetTop){
      header.classList.add("fixed_header");
    }
    else{
      header.classList.remove("fixed_header");
    }
    if (window.pageYOffset > 200){
      top.classList.add("activetop");
    }
    else{
      top.classList.remove("activetop");
    }
  }

  const copyright = document.querySelector(".copyright");
  let date = new Date();
  let year = date.getFullYear();
  copyright.innerHTML = "©"+year;
}