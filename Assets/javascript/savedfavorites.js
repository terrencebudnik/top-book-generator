let $favoritesList = document.querySelector("#favorites-list");

let favorites =
    JSON.parse(window.localStorage.getItem("favorites")) || [];
console.log(favorites);

for (let i = 0; i < favorites.length; i++)
{
    let savedfavesEL = document.createElement("li");
    savedfavesEL.textContent = 'Book: ${favorites[i].bookOnereadbtn';
    savedfavesEL.textContent = 'Book: ${favorites[i].bookTwofavebtn';
    savedfavesEL.textContent = 'Book: ${favorites[i].bookThreefavebtn}';
    favorites.appendChild(savedfavesEL);

}




// localStorage.setItem("favorites", JSON.stringify(user));

// var favorites = {

// for (let i = 0; i < favorites.length; i++) {
//     let savedfavesEL = document.createElement("li");
//     savedfavesEL.textContent = 'Book: ${favorites[i].bookOnefavebtn';
//     savedfavesEL.textContent = 'Book: ${favorites[i].bookTwofavebtn';
//     savedfavesEL.textContent = 'Book: ${favorites[i].bookThreefavebtn}';
//     favorites.appendChild(savedfavesEL);

// }

// localStorage.setItem("favorites", JSON.stringify(user));


// let favorites = 
//     JSON.parse(window.localStorage.getItem(favorites)) || [];
//     console.log(favorites);

//window.addEventListener ??







