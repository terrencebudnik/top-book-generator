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