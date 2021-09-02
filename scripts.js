const key = 'api_key=ac774df4539c0a84dda80aa761f6ad7a'
const mainreq = 'https://api.themoviedb.org/3';
const firsturl = mainreq + '/discover/movie?sort_by=popularity.desc&' + key;
const image = 'https://image.tmdb.org/t/p/w500/'
const main = document.getElementById('MAIN')
const form = document.getElementById('form');
const search = document.getElementById('search');
const searchurl = mainreq + '/search/movie?' + key

mymovies(firsturl)
function mymovies(params) {
    fetch(params)
        .then(res => res.json())
        .then(data => {
            Showing(data.results);
        })
}

function Showing(data) {
    main.innerHTML = '';
    data.forEach(movie => {
        const { title, poster_path, overview, vote_average } = movie;
        const onelement = document.createElement('div');
        onelement.classList.add('container');
        onelement.innerHTML =
            `
        <img
        src='${image + poster_path}'
        alt="${title}"
        style="height: 30vh; width: 30vw"
      />
      <div class="movieall">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="green">${vote_average} ⭐</span>
      </div>
      <div class="overview">
      <a href="#"><i class="fa fa-play" aria-hidden="true"></i></a>
      <a href="#">🎬</a>

      </div>   
      </div>
       `
        main.appendChild(onelement)
    })
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchterm = search.value;
    if (searchterm) {
        mymovies(searchurl + '&query=' + searchterm)
    }
    else {
        mymovies(firsturl)
    }
})


// SLIDESHOW
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0.5";
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.opacity = "1";
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 5000)
}
