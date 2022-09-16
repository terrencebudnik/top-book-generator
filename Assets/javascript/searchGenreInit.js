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
        var idOne = data.results[i].id

        var displayBookoneEl = $('#displayBookone');
        var bookOnetitle = $('<h2>');
        bookOnetitle.attr('class', 'card-title');
        bookOnetitle.text(data.results[i].title);
        displayBookoneEl.append(bookOnetitle);


        var bookOnebodyEl = $('<p>');
        bookOnebodyEl.attr('class', 'card-content');
        bookOnebodyEl.text(data.results[i].authors[0].name)
        bookOnetitle.append(bookOnebodyEl);

        var bookOnereadbtn = $('<a>');
        bookOnereadbtn.attr('href', "https://www.gutenberg.org/files/"+idOne+"/"+idOne+"-h/"+idOne+"-h.htm");
        bookOnereadbtn.attr('target', 'blank')
        bookOnereadbtn.text("Read it Now!")
        bookOnetitle.append(bookOnereadbtn);

        var bookOnefavebtn = $('<button>');
        bookOnefavebtn.attr('class', 'card-action waves-effect waves-light btn-small favorite-button');
        bookOnefavebtn.text("Add to Your Favorites")
        bookOnefavebtn.attr("data-title", data.results[i].title);
        bookOnefavebtn.attr("data-url", "https://www.gutenberg.org/files/"+idOne+"/"+idOne+"-h/"+idOne+"-h.htm")
        displayBookoneEl.append(bookOnefavebtn);

    }
        // var idTwo = data.results[1].id

        // var displayBooktwoEl = $('#displayBooktwo');
        // var bookTwotitle = $('<h2>');
        // bookTwotitle.attr('class', 'card-title');
        // bookTwotitle.text(data.results[1].title);
        // displayBooktwoEl.append(bookTwotitle);

        // var bookTwobodyEl = $('<p>');
        // bookTwobodyEl.attr('class', 'card-content');
        // bookTwobodyEl.text(data.results[1].authors[0].name)
        // bookTwotitle.append(bookTwobodyEl);

        // var bookTworeadbtn = $('<a>');
        // bookTworeadbtn.attr('href', "https://www.gutenberg.org/files/"+idTwo+"/"+idTwo+"-h/"+idTwo+"-h.htm");
        // bookTworeadbtn.attr('target', 'blank')
        // bookTworeadbtn.text("Read it Now!")
        // bookTwotitle.append(bookTworeadbtn);

        // var bookTwofavebtn = $('<button>');
        // bookOnefavebtn.attr('class', 'card-action waves-effect waves-light btn-small favorite-button');
        // bookTwofavebtn.text("Add to Your Favorites")
        // displayBooktwoEl.append(bookTwofavebtn);


        // var idThree = data.results[2].id
        
        // var displayBookthreeEl = $('#displayBookthree');
        // var bookThreetitle = $('<h2>');
        // bookThreetitle.attr('class', 'card-title');
        // bookThreetitle.text(data.results[2].title);
        // displayBookthreeEl.append(bookThreetitle);

        // var bookThreebodyEl = $('<p>');
        // bookThreebodyEl.attr('class', 'card-content');
        // bookThreebodyEl.text(data.results[2].authors[0].name)
        // bookThreetitle.append(bookThreebodyEl);

        // var bookThreereadbtn = $('<a>');
        // bookTworeadbtn.attr('href', "https://www.gutenberg.org/files/"+idThree+"/"+idThree+"-h/"+idThree+"-h.htm");
        // bookTworeadbtn.attr('target', 'blank')
        // bookThreereadbtn.text("Read it Now!")
        // bookThreetitle.append(bookThreereadbtn);

        // var bookThreefavebtn = $('<button>');
        // bookOnefavebtn.attr('class', 'card-action waves-effect waves-light btn-small favorite-button');
        // bookThreefavebtn.text("Add to Your Favorites")
        // displayBookthreeEl.append(bookThreefavebtn);
    })


    $(document).on("click", ".favorite-button", function(event) {
        event.preventDefault();

        console.log(event.target.dataset.title);

        var bookInfo = {
            title: event.target.dataset.title,
        }
        console.log(bookInfo);

        favBooksList.push(bookInfo);

        localStorage.setItem("favorite-list", JSON.stringify(favBooksList));
        location.replace(`./favorites.html`);
    })