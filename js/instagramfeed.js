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
  instafeed.innerHTML = instafeed.innerHTML + '<img src="' + instagramJson.items[i].images.standard_resolution.url + '">';
  console.log(instagramJson.items[i].images.standard_resolution.url);
}

/*$.ajax({
  method: "GET",
  url: "https://www.instagram.com/ucsdclimbing/media/?size=L",
  dataType: "json"
}).done(function(result) {
  var instafeed = document.getElementById("instafeed");

  for (i = 0; i < result.items.length; i++) {
    instafeed.innerHTML = instafeed.innerHTML + '<img src="' + result.items[i].images.standard_resolution.url + '">';
    console.log(result.items[i].images.standard_resolution.url);
  }
}); */
