var searchTopic = $('#searchTopic');



var topicChoice = "fantasy";

var baseURL = "http://gutendex.com/books/?topic="+topicChoice;
console.log(baseURL);

fetch(baseURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })

   searchTopic.on("click", function(){

   });


// changing the value of thext area
$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1'));

// dropdown on homepage
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
