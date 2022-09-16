var favListEl = $("#fav-list");
let favoriteList = 
    JSON.parse(window.localStorage.getItem("favorite-list")) || [];
 
    
    for (let i = 0; i < favoriteList.length; i++) {
   
        var bookCardEl = $(`<div class="card center-align" style="background-image: url('./Assets/Images/display-book-bg.jpg')">`);

        var bookTitleEl = $('<h2>');
        bookTitleEl.attr('class', 'card-title');
        bookTitleEl.text(favoriteList[i].title);
        bookCardEl.append(bookTitleEl);

        var bookBodyEl = $('<p>');
        bookBodyEl.attr('class', 'card-content');
        bookBodyEl.text(favoriteList[i].author)
        bookTitleEl.append(bookBodyEl);

      

        var bookReadbtn = $('<a>');
        bookReadbtn.attr('href', "favoriteList[i].url");
        bookReadbtn.attr('target', 'blank')
        bookReadbtn.text("Read it Now!")
        bookTitleEl.append(bookReadbtn);

        favListEl.append(bookCardEl);
    }


        
  
    

    


          
    
           
    