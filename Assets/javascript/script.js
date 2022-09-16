var searchGenrebtn = $('#searchGenrebtn');
var userInput = $('#userInput');
var userTitleInput = $('#userTitleInput'); 
var searchTitlebtn = $('#searchTitlebtn'); 
var searchAuthorbtn = $('#searchAuthorbtn');
var userAuthorInput = $('#userAuthorInput');



searchGenrebtn.on("click", function (e) {
    e.preventDefault();
    var genreChoice = userInput.val();
    location.replace(`./searchGenre.html?genre=${genreChoice}`);
});

searchTitlebtn.on("click", function (e) {
    e.preventDefault();
    var titleChoice = userTitleInput.val();
    location.replace(`./searchTitle.html?title=${titleChoice}`);
});



searchAuthorbtn.on("click", function (e) {
    e.preventDefault();
    var authorChoice = userAuthorInput.val();
    location.replace(`./searchAuthor.html?author=${authorChoice}`);
})

