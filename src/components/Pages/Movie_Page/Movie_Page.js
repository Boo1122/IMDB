import "./Movie_Page.css";
import { navigate } from "../../Navigate_History/Navigate_History";
import Cookie from "js-cookie";

export class MoviePage {
  constructor() {
    this.number = 10;
    this.moviePage();
    this.generateUrl();
    this.getMovies();
    this.moviesPagination();
    this.numberPages();
  }

  moviePage() {
    const body = document.getElementById("body");
    const container = document.createElement("div");
    container.id = "movie-page";
    container.classList.add("page");
    container.style.backgroundImage =
      "url(./public/img/batman_background_single.jpg)";

    const movieListContainer = document.createElement("div");
    movieListContainer.id = "movie-list-container";

    body.appendChild(container);
    container.appendChild(movieListContainer);
  }

  generateUrl(skip) {
    return `https://movies-app-siit.herokuapp.com/movies?take=10${
      skip ? "&skip=" + skip : ""
    }`;
  }

  getMovies(skip) {
    const url = this.generateUrl(skip);

    fetch(url)
      .then((response) => response.json())
      .then((movieData) => {
        this.movieData = movieData;
        this.renderMovieList();
        this.currentPage = this.movieData.pagination.currentPage;
        this.setCurrentPage();
      });
  }

  setCurrentPage() {
    const allPageButtons = document.getElementsByClassName("nr-of-pages");
    for (const pageButton of allPageButtons) {
      pageButton.classList.remove("actives");
    }

    const id = `${this.currentPage}_pageButton`;
    document.getElementById(id).classList.add("actives");
  }

  renderMovieList() {
    const body = document.getElementById("movie-list-container");
    body.innerHTML = null;
    for (const movie of this.movieData.results) {
      this.moviesContent(movie, body);

      const deleteMovieBox = document.createElement("div");
      deleteMovieBox.className = "deleteMovie";
      body.appendChild(deleteMovieBox);

      const token = Cookie.get("token");

      if (token) {
        const deleteMov = document.createElement("span");
        deleteMov.classList.add("delete-single-movie");
        deleteMov.setAttribute("title", "Delete Movie");
        deleteMov.innerText = "X";
        deleteMovieBox.appendChild(deleteMov);
      }

      if (token === "undefined") {
        const deleteX = document.getElementsByClassName("delete-single-movie");
        for (const x of deleteX) {
          x.style.display = "none";
        }
      }
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
    paginationMovie.classList.add("actives");

    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination-div";
    paginationDiv.id = "pagDiv";

    const previous = document.createElement("button");
    previous.id = "previous-movie";
    previous.className = "previous";
    previous.innerText = `< Previous`;
    previous.disabled = true;
    previous.style.opacity = 0.5;

    previous.addEventListener("click", () => {
      this.getMovies(this.movieData.pagination.currentPage * 10 - 20);
      if (this.movieData.pagination.currentPage < 3) {
        previous.disabled = true;
        previous.style.opacity = 0.5;
      }
      if (this.movieData.pagination.currentPage >= 9) {
        next.disabled = false;
        next.style.opacity = 1.0;
      }
    });

    const next = document.createElement("button");
    next.id = "next-movie";
    next.className = "next";
    next.innerText = `Next >`;
    next.addEventListener("click", () => {
      this.getMovies(this.movieData.pagination.currentPage * 10);

      if (this.movieData.pagination.currentPage >= 1) {
        previous.disabled = false;
        previous.style.opacity = 1.0;
      }
      if (this.movieData.pagination.currentPage >= 9) {
        next.disabled = true;
        next.style.opacity = 0.5;
      }
    });

    let store = [];
    const pagesContainer = document.createElement("div");
    pagesContainer.id = "pages-container";

    body.appendChild(paginationMovie);
    paginationMovie.appendChild(paginationDiv);
    paginationDiv.appendChild(pagesContainer);
    paginationDiv.appendChild(previous);

    for (let i = 1; i <= 10; i++) {
      const page = document.createElement("button");
      page.id = `${i}_pageButton`;
      page.classList.add("nr-of-pages");

      page.innerText = `${i}`;
      store.push(page[i]);

      pagesContainer.appendChild(page);
    }

    paginationDiv.appendChild(next);
  }

  numberPages() {
    const pages = document.getElementsByClassName("nr-of-pages");

    for (let i = 0; i < pages.length; i++) {
      pages[i].addEventListener("click", (event) => {
        this.getMovies((event.target.innerText - 1) * 10);
      });
    }
  }
}
