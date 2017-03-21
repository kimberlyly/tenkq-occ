var images = ["explore_1.jpg", "explore_2.jpg", "explore_3.jpg", "explore_4.jpg", "explore_5.jpg", "explore_7.jpg"]
var explorefeed = document.getElementById("explorefeed");

for (i = 0; i < images.length; i++) {
  explorefeed.innerHTML = explorefeed.innerHTML + '<div class="insta-item"><img src="assets/img/' + images[i] + '"></div>';
}

$('#explorefeed').slick({
  centerMode: true,
  centerPadding: '15px',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*$('#explorefeed').slickLightbox({
    src: 'src',
    itemSelector: '.item img'
  }); */
