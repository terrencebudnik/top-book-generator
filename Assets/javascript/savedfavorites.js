let $favorites = document.querySelector("#favorites-list");

let favorites = 
    JSON.parse(window.localStorage.getItem("favorite-list")) || [];
    console.log(favorites);

for (let i = 0; i < favorites.length; i++) {
    let savedfavesEL = document.createElement("li");
    savedfavesEL.textContent = 'Book: ${favorites[i].bookOnereadbtn';
    savedfavesEL.textContent = 'Book: ${favorites[i].bookTwofavebtn';
    savedfavesEL.textContent = 'Book: ${favorites[i].bookThreefavebtn}';
    favorites.appendChild(savedfavesEL);

}