
const form = document.getElementById("form")
const inputSearch = document.getElementById("search")
const movie = document.getElementById("movie")
const watchListBtn = document.getElementById("plus-icon")

// Fetch Function

const fetchFunc = () => {
    let data = {
        inputSearch : inputSearch.value
    }

    fetch('/', {
        method : "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        saveToLocalStorage(data)
        displayData(data)
    })
}

// Form Submit

form.addEventListener("submit", (e) => {
    e.preventDefault()
    fetchFunc()
    inputSearch.value = ""
})





// Display Data 

const displayData = (data) => {
    let movieHtml = `
    <img id = "movie-img" src=${data.Poster} alt="blade-runner">

    <div id="desc-container">
        <div id="title">
            <h2>${data.Title}</h2>
            <span id="rating">
                <i class="fa-solid fa-star"></i> ${data.imdbRating}</span>
        </div>
        
        <div id="time-genre-watchList">
            <span id="run-time">${data.Runtime}</span>
            <span id="genre">${data.Genre}</span>
            <div id="watchList">
                <button id="plus-icon">
                    <i class="fa-solid fa-plus"></i>
                </button>
                Watchlist
            </div>
        </div>
    </div>  
    <p>${data.Plot}</p>
    <hr />
    ${movie.innerHTML}
    `

    movie.innerHTML = movieHtml
}

// Save LocalStorage function 

const saveToLocalStorage = (data) => {
    let data_serialized = JSON.stringify(data)
    localStorage.setItem("movieData", data_serialized)
}
watchListBtn.addEventListener("click", () => {
    saveToLocalStorage()
})


// Get MovieData from LocalStorage
let data_deserialized = JSON.parse(localStorage.getItem("movieData"))
console.log(data_deserialized)
console.log(localStorage)




