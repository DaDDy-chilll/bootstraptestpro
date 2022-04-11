window.addEventListener('load',()=>{
  document.querySelector('.loading').style.display='none';
});
// ___________________________
$('.profolio').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
//! -----------------------------------------------------------------------------------------------------
var waypoint = new Waypoint({
  element: document.getElementById('services'),
  handler: function(direction) {
    if(direction === 'down'){
      document.querySelector('.navbar').classList.add('nav-control')
      document.querySelector('.navbar').classList.add('animate__fadeInDown')
      document.querySelector('.navbar').classList.add('shadow')
    }else{
      document.querySelector('.navbar').classList.remove('nav-control')
      document.querySelector('.navbar').classList.remove('animate__fadeInDown')
      document.querySelector('.navbar').classList.remove('shadow')

    }
  },
  offset: '10%'
})

var waypoint = new Waypoint({
  element: document.getElementById('pricing'),
  handler: function(direction) {
    if(direction === 'down'){
    document.querySelector('.footer-icon').classList.remove('d-none')
    document.querySelector('.footer-icon').classList.add('animate__fadeInUp')
    }else{
    document.querySelector('.footer-icon').classList.add('d-none')
    document.querySelector('.footer-icon').classList.remove('animate__fadeInUp')

    }
  },
  offset: '50%'
})

// _________________________________________
let card = document.querySelectorAll('.card')
const changeThemeToDark = ()=>{
  document.documentElement.setAttribute('data-theme','dark')
  localStorage.setItem('data-theme','dark');

    for(let i = 0; i < card.length; i++){
    card[i].classList.remove('shadow-xl');
    card[i].classList.remove('border-0');
    card[i].classList.add('pdf-border-zinc-800')
  }
}
const changeThemeToLight = ()=>{
  document.documentElement.setAttribute('data-theme','light')
  localStorage.setItem('data-theme','light');

  for(let i = 0; i < card.length; i++){
  card[i].classList.add('shadow-xl');
  card[i].classList.add('border-0');
  card[i].classList.remove('pdf-border-zinc-800')
}
}


let changeTheme = document.getElementById('changeTheme');
changeTheme.addEventListener('change',()=>{
  let theme = localStorage.getItem('data-theme')
  if(theme === 'dark'){
    changeThemeToLight();
  }else{
    changeThemeToDark();
  }
})

let theme = localStorage.getItem('data-theme')
if(theme === 'dark'){
  changeThemeToDark();
  changeTheme.setAttribute('checked','checked')
}else{
  changeThemeToLight();
}
// --------------------------------------
let menuIcon = document.querySelector('.menu-icon')
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('show')
})
// __________________________
ScrollReveal(
  {
     origin: 'bottom',
     duration: 900 ,
     reset: true,
     
    }
    ).reveal('.headline',{
      interval: 200,
      distance: '200px',
      viewFactor: 0
});