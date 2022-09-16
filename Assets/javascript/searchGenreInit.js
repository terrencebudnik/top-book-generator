var favListEl = $("#fav-list");
let favoriteList = 
    JSON.parse(window.localStorage.getItem("favorite-list")) || [];
 

var queryString = window.location.search
console.log(queryString);

var urlParams = new URLSearchParams(queryString);
var genreParam = urlParams.get('genre');
var favBooksList = JSON.parse(localStorage.getItem("favorite-list")) || [];
console.log(urlParams);
console.log(genreParam);


var genreURL = "http://gutendex.com/books/?topic=" + genreParam;

fetch(genreURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        for (let i = 0; i < 3; i++) {
        
        var bookCardEl = $(`<div class="card center-align" style="background-image: url('./Assets/Images/display-book-bg.jpg')">`);
            
        var id = data.results[i].id

        
        var bookTitleEl = $('<h2>');
        bookTitleEl.attr('class', 'card-title');
        bookTitleEl.text(data.results[i].title);
        bookCardEl.append(bookTitleEl);


        var bookBodyEl = $('<p>');
        bookBodyEl.attr('class', 'card-content');
        bookBodyEl.text(data.results[i].authors[0].name)
        bookTitleEl.append(bookBodyEl);

        var bookReadbtn = $('<a>');
        bookReadbtn.attr('href', "https://www.gutenberg.org/files/" + id + "/" + id + "-h/" + id + "-h.htm");
        bookReadbtn.attr('target', 'blank')
        bookReadbtn.text("Read it Now!")
        bookTitleEl.append(bookReadbtn);

        var bookFavebtn = $('<button>');

        bookFavebtn.attr('class', 'btn-small favorite-button');
        bookFavebtn.text("Add to Your Favorites")
        bookFavebtn.attr("data-title", data.results[i].title);
        bookFavebtn.attr("data-author", data.results[i].authors[0].name);
        bookFavebtn.attr("data-url", "https://www.gutenberg.org/files/"+id+"/"+id+"-h/"+id+"-h.htm")
        bookCardEl.append(bookFavebtn);

        favListEl.append(bookCardEl);

    }
       

    })


    $(document).on("click", ".favorite-button", function(event) {
        event.preventDefault();


        var bookInfo = {
            title: event.target.dataset.title,
            author: event.target.dataset.author,
            url: event.target.dataset.url
        }
      

        favBooksList.push(bookInfo);

        localStorage.setItem("favorite-list", JSON.stringify(favBooksList));
        location.replace(`./favorites.html`);

    })
    

