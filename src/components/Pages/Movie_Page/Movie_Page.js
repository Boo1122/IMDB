import "./Movie_Page.css";
import {
  navigate
} from "../../Navigate_History/Navigate_History";

export class MoviePage {
  constructor() {
    this.moviePage();
    this.generateUrl();
    this.getMovies();
    this.moviesPagination();
  }

  moviePage() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    container.id = "movie-page";
    container.classList.add("page");
    container.style.backgroundImage = "url(./public/img/star_wars_sword.jpg)";

    const movieListContainer = document.createElement("div");
    movieListContainer.id = "movie-list-container";

    body.appendChild(container);
    container.appendChild(movieListContainer);
  }

  generateUrl(skip) {
    return `https://movies-api-siit.herokuapp.com/movies?take=10${
      skip ? "&skip=" + skip : ""
    }`;
  }

  getMovies(skip) {
    const url = this.generateUrl(skip);

    fetch(url)
      .then((response) => response.json())
      .then((movieData) => {
        this.movieData = movieData;
        console.log(movieData);
        this.renderMovieList();
      });
  }

  renderMovieList() {
    const body = document.getElementById("movie-list-container");
    body.innerHTML = null;
    for (const movie of this.movieData.results) {
      this.moviesContent(movie, body);
    }
  }

  moviesContent(movie, body) {
    const container = document.createElement("div");
    container.setAttribute("data-target", "single-movie-page");
    container.addEventListener("click", navigate.nav);

    container.id = movie._id;
    container.classList.add("movie-page-container");

    const posters = document.createElement("div");

    posters.className = "posters";

    const p = document.createElement("p");
    p.innerHTML = movie.Title;

    const img = document.createElement("img");
    img.classList.add("detail-posters");
    img.setAttribute("src", movie.Poster);

    body.appendChild(container);
    container.appendChild(posters);
    posters.appendChild(p);
    posters.appendChild(img);
  }

  moviesPagination() {
    const body = document.getElementById("body");
    const paginationMovie = document.getElementById("movie-page");

    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination-div";
    paginationDiv.id = "pagDiv";

    const previous = document.createElement("button");
    previous.id = "previous-movie";
    previous.classList.add("nav-link");
    previous.className = "previous";
    previous.innerText = `< Previous`;
    previous.addEventListener("click", () => {
      this.getMovies(this.movieData.pagination.currentPage / 10);
    });


    const next = document.createElement("button");
    next.id = "next-movie";
    next.classList.add("nav-link");
    next.className = "next";
    next.innerText = `Next >`;
    next.addEventListener("click", () => {
      this.getMovies(this.movieData.pagination.currentPage * 10);
    });


    let store = [];
    let pagesContainer = document.createElement("div");
    pagesContainer.id = 'pages-container'
    let page = document.createElement("p");
    // page.innerText = `${}`
    for (let i = 0; i <= paginationMovie.length; i++) {
      page.addEventListener('click', () => {
        page.innerText = `${page}`;
        store.push(page)
        this.getMovies(20);

      })
    }




    body.appendChild(paginationMovie);
    paginationMovie.appendChild(paginationDiv);
    paginationDiv.appendChild(pagesContainer);
    pagesContainer.appendChild(previous);
    pagesContainer.appendChild(page)



    pagesContainer.appendChild(next);
  }
}