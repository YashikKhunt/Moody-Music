//Selectors
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var header = document.getElementById('navbar');
var mod = document.getElementById('mod');
var main_back = document.querySelector('.background');

// Animate The navigation bar when it scroll down in Y axis
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 30);
  mod.classList.toggle("sticky",window.scrollY > 30);
  main_back.style.opacity="0.9"
  if(window.scrollY < 100){
    main_back.style.opacity = "1";
  }
});

//function

// animated text testing
anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1600,
    easing: "easeOutExpo",
    delay: 1000
});


/*
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
document.querySelector('.main_sec').scrollIntoView({ 
  behavior: 'smooth' 
});
*/
