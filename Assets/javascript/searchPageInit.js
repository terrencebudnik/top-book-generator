var queryString = window.location.search
console.log(queryString);

var urlParams = new URLSearchParams(queryString);
var genreParam = urlParams.get('genre');
console.log(urlParams);
console.log(genreParam);
var baseURL = "http://gutendex.com/books/?topic=" + genreParam;
//http://gutendex.com/books/?search=" + titleParam

fetch(baseURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);




        var displayBookoneEl = $('#displayBookone');
        var bookOnetitle = $('<h2>');
        bookOnetitle.attr('class', 'card-title');
        bookOnetitle.text(data.results[0].title);
        displayBookoneEl.append(bookOnetitle);


        // var bookOneimage = $('<img>');
        // bookOneimage.attr()
        // displayBookoneEl.append(bookOneimage);

        var bookOnebodyEl = $('<p>');
        bookOnebodyEl.attr('class', 'card-content');
        bookOnebodyEl.text(data.results[0].authors[0].name)
        bookOnetitle.append(bookOnebodyEl);

        var bookOnereadbtn = $('<button>');
        bookOnereadbtn.attr('class', 'waves-effect waves-light btn-small');
        bookOnereadbtn.text("Read it Now!")
        bookOnetitle.append(bookOnereadbtn);

        var bookOnefavebtn = $('<button>');
        bookOnefavebtn.attr('class', 'card-action');
        bookOnefavebtn.attr('class', 'waves-effect waves-light btn-small');
        bookOnefavebtn.text("Add to Your Favorites")
        displayBookoneEl.append(bookOnefavebtn);



        var displayBooktwoEl = $('#displayBooktwo');
        var bookTwotitle = $('<h2>');
        bookTwotitle.attr('class', 'card-title');
        bookTwotitle.text(data.results[1].title);
        displayBooktwoEl.append(bookTwotitle);

        var bookTwobodyEl = $('<p>');
        bookTwobodyEl.attr('class', 'card-content');
        bookTwobodyEl.text(data.results[1].authors[0].name)
        bookTwotitle.append(bookTwobodyEl);

        var bookTwobtn = $('<button>');
        bookTwobtn.attr('class', 'btn');
        bookTwobtn.text("Read it Now!")
        bookTwotitle.append(bookTwobtn);

        var bookTwofavebtn = $('<button>');
        bookTwofavebtn.attr('class', 'card-action');
        bookTwofavebtn.attr('class', 'waves-effect waves-light btn-small');
        bookTwofavebtn.text("Add to Your Favorites")
        displayBooktwoEl.append(bookTwofavebtn);



        var displayBookthreeEl = $('#displayBookthree');
        var bookThreetitle = $('<h2>');
        bookThreetitle.attr('class', 'card-title');
        bookThreetitle.text(data.results[2].title);
        displayBookthreeEl.append(bookThreetitle);

        var bookThreebodyEl = $('<p>');
        bookThreebodyEl.attr('class', 'card-content');
        bookThreebodyEl.text(data.results[2].authors[0].name)
        bookThreetitle.append(bookThreebodyEl);

        var bookThreebtn = $('<button>');
        bookThreebtn.attr('class', 'waves-effect waves-light btn-small');
        bookThreebtn.text("Read it Now!")
        bookThreetitle.append(bookThreebtn);

        var bookThreefavebtn = $('<button>');
        bookThreefavebtn.attr('class', 'card-action');
        bookThreefavebtn.attr('class', 'waves-effect waves-light btn-small');
        bookThreefavebtn.text("Add to Your Favorites")
        displayBookthreeEl.append(bookThreefavebtn);
    })