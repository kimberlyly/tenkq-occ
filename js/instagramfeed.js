$.ajax({
  method: "GET",
  url: "https://www.instagram.com/ucsdclimbing/media/?size=L",
  dataType: "json"
}).done(function(result) {
  var instafeed = document.getElementById("instafeed");

  for (i = 0; i < result.items.length; i++) {
    instafeed.innerHTML = instafeed.innerHTML + '<img src="' + result.items[i].images.standard_resolution.url + '">';
    console.log(result.items[i].images.standard_resolution.url);
  }
});
