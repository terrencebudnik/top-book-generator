var searchGenrebtn = $('#searchGenrebtn');
var userInput = $('#userInput');
var data;



searchGenrebtn.on("click", function (e) {
    e.preventDefault();
    var genreChoice = userInput.val();
    location.replace(`./searchresults.html?genre=${genreChoice}`);
})





