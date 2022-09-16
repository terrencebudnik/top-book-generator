var searchGenrebtn = $('#searchGenrebtn');
var userInput = $('#userInput');
var searchAuthorbtn = $('#searchAuthorbtn');
var userAuthorInput = $('#userAuthorInput');



searchGenrebtn.on("click", function (e) {
    e.preventDefault();
    var genreChoice = userInput.val();
    location.replace(`./searchresults.html?genre=${genreChoice}`);
})



searchAuthorbtn.on("click", function (e) {
    e.preventDefault();
    var authorChoice = userAuthorInput.val();
    location.replace(`./searchAuthor.html?search=${authorChoice}`);
})

