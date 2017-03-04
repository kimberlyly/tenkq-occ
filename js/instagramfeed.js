function readStringFromFileAtPath(pathOfFileToReadFrom) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://kimberlyly.github.io/tenkq-occ/" + pathOfFileToReadFrom, false);
  request.send(null);
  var returnValue = request.responseText;

  return returnValue;
  }


var instagramData = readStringFromFileAtPath ( "assets/instagramdata.txt" );
var instagramJson = JSON.parse(instagramData);
var instafeed = document.getElementById("instafeed");

for (i = 0; i < instagramJson.items.length; i++) {
  instafeed.innerHTML = instafeed.innerHTML + '<div class="item"><img src="' + instagramJson.items[i].images.low_resolution.url + '"></div>';
}

$('#instafeed').slick({
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
        slidesToShow: 2,
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

/*$('#instafeed').slickLightbox({
    src: 'src',
    itemSelector: '.item img'
  }); */
