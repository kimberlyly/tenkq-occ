var walls = ["contour.png", "vertical.png", "cave.png", "arete.png", "overhang.png", "slab.png"];
var wallnames = ["Contour", "Vertical", "Cave", "Arete", "Overhang", "Slab"]
var resetdates = ["1/1/17", "2/2/17", "3/3/17", "4/4/17", "5/5/17", "6/6/17"]
var settingwall = document.getElementById("setting-wall");

for (var i = 0; i < walls.length; i++) {
  settingwall.innerHTML = settingwall.innerHTML + '<div class="wall-image" data-toggle="tooltip" title="hello"><img src="assets/img/' + walls[i] + '"><br><div class="slide__caption"><strong>' + wallnames[i] + '</strong><br>' + resetdates[i] + '</div></div>';
}

$('#setting-wall').slick({
  centerMode: true,
  initialSlide: 2,
  centerPadding: '15px',
  dots: false,
  infinite: false,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*$('#instafeed').slickLightbox({
    src: 'src',
    itemSelector: '.item img'
  }); */
