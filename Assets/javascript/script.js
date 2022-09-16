
var searchGenrebtn = $('#searchGenrebtn');
var userInput = $('#userInput');
var data;



searchGenrebtn.on("click", function (e) {
    e.preventDefault();
    var genreChoice = userInput.val();
    location.replace(`./searchresults.html?genre=${genreChoice}`);
})


// changing the value of thext area
// $('#textarea1').val('New Text');
// M.textareaAutoResize($('#textarea1'));

// // dropdown on homepage
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
//   });



