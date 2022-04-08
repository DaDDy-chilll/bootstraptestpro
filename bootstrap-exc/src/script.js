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