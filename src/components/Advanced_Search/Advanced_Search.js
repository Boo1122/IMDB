class AdvancedSearch {
  constructor() {
    this.searchBox();
  }

  searchBox() {
    const box = document.getElementById("body");
    const centerbox = document.createElement("div");
    centerbox.id = "centerBox";

    const containerBox = document.createElement("div");
    containerBox.id = "advancedBox";

    box.appendChild(centerbox);
    centerbox.appendChild(containerBox);

    this.searchTitle();
    //this.searchYear();
    this.searchRunetime();
    this.searchGenre();
    this.searchLanguage();
    this.searchCountry();
    this.searchByImdbRating();
    this.searchByimdbVotes();
    this.searchImdbID();
    this.searchByType();
  }

  searchTitle() {
    const titleBox = document.createElement("div");

    const titlelabel = document.createElement("p");
    titlelabel.classList = "search-title-label";
    titlelabel.innerText = "Search movie by title:";

    const titleInput = document.createElement("input");
    titleInput.className = "search-title-input";
    titleInput.setAttribute("type", "text");

    document.getElementById("advancedBox").appendChild(titleBox);
    titleBox.appendChild(titlelabel);
    titleBox.appendChild(titleInput);
  }

  searchYear() {
    const yearBox = document.createElement("div");

    const yearLabel = document.createElement("p");
    yearLabel.className = "search-year-label";
    yearLabel.innerText = "Select year:";
    const yearInput = document.createElement("select");
    yearInput.className = "search-year";

    const firstYear = 2020;
    const lastYear = 1900;
    for (let i = firstYear; i >= lastYear; i--) {
      let option = document.createElement("option");
      option.classList.add("drop-all-years");
      option.innerText = `${i}`;
    }

    document.getElementById("advancedBox").appendChild(yearBox);
    yearBox.appendChild(yearLabel);
    yearBox.appendChild(yearInput);
    yearInput.appendChild(option);
  }

  searchRunetime() {
    const runtimeBox = document.createElement("div");

    const runtimeLabel = document.createElement("p");
    runtimeLabel.classList = "search-runtime-label";
    runtimeLabel.innerText = "Search by runtime:";

    const runtimeInput = document.createElement("input");
    runtimeInput.className = "search-runtime-input";
    runtimeInput.setAttribute("type", "number");

    document.getElementById("advancedBox").appendChild(runtimeBox);
    runtimeBox.appendChild(runtimeLabel);
    runtimeBox.appendChild(runtimeInput);
  }

  searchGenre() {
    const genreBox = document.createElement("div");

    const genrelabel = document.createElement("p");
    genrelabel.classList = "search-genre-label";
    genrelabel.innerText = "Search movie by genre:";

    const genreInput = document.createElement("input");
    genreInput.className = "search-genre-input";
    genreInput.setAttribute("type", "text");

    document.getElementById("advancedBox").appendChild(genreBox);
    genreBox.appendChild(genrelabel);
    genreBox.appendChild(genreInput);
  }

  searchLanguage() {
    const languageBox = document.createElement("div");

    const languagelabel = document.createElement("p");
    languagelabel.classList = "search-language-label";
    languagelabel.innerText = "Search movie by language:";

    const languageInput = document.createElement("input");
    languageInput.className = "search-language-input";
    languageInput.setAttribute("type", "text");

    document.getElementById("advancedBox").appendChild(languageBox);
    languageBox.appendChild(languagelabel);
    languageBox.appendChild(languageInput);
  }

  searchCountry() {
    const countryBox = document.createElement("div");

    const countrylabel = document.createElement("p");
    countrylabel.classList = "search-country-label";
    countrylabel.innerText = "Search movie by Country:";

    const countryInput = document.createElement("input");
    countryInput.className = "search-country-input";
    countryInput.setAttribute("type", "text");

    document.getElementById("advancedBox").appendChild(countryBox);
    countryBox.appendChild(countrylabel);
    countryBox.appendChild(countryInput);
  }

  searchByImdbRating() {
    const imdbRatingBox = document.createElement("div");

    const imdbRatingLabel = document.createElement("p");
    imdbRatingLabel.classList = "search-imdbRating-label";
    imdbRatingLabel.innerText = "Search by imdbRating:";

    const imdbRatingInput = document.createElement("input");
    imdbRatingInput.className = "search-imdbRating-input";
    imdbRatingInput.setAttribute("type", "number");

    document.getElementById("advancedBox").appendChild(imdbRatingBox);
    imdbRatingBox.appendChild(imdbRatingLabel);
    imdbRatingBox.appendChild(imdbRatingInput);
  }

  searchByimdbVotes() {
    const imdbVotesBox = document.createElement("div");

    const imdbVotesLabel = document.createElement("p");
    imdbVotesLabel.classList = "search-imdbVotes-label";
    imdbVotesLabel.innerText = "Search by imdbVotes:";

    const imdbVotesInput = document.createElement("input");
    imdbVotesInput.className = "search-imdbVotes-input";
    imdbVotesInput.setAttribute("type", "number");

    document.getElementById("advancedBox").appendChild(imdbVotesBox);
    imdbVotesBox.appendChild(imdbVotesLabel);
    imdbVotesBox.appendChild(imdbVotesInput);
  }

  searchImdbID() {
    const imdbIDBox = document.createElement("div");

    const imdbIDLabel = document.createElement("p");
    imdbIDLabel.classList = "search-imdbID-label";
    imdbIDLabel.innerText = "Search by imdbID:";

    const imdbIDInput = document.createElement("input");
    imdbIDInput.className = "search-imdbID-input";

    document.getElementById("advancedBox").appendChild(imdbIDBox);
    imdbIDBox.appendChild(imdbIDLabel);
    imdbIDBox.appendChild(imdbIDInput);
  }

  searchByType() {
    const typeBox = document.createElement("div");

    const typeLabel = document.createElement("p");
    typeLabel.classList = "search-type-label";
    typeLabel.innerText = "Search by Type:";

    const typeInput = document.createElement("input");
    typeInput.className = "search-type-input";

    document.getElementById("advancedBox").appendChild(typeBox);
    typeBox.appendChild(typeLabel);
    typeBox.appendChild(typeInput);
  }
}

new AdvancedSearch();

function allYears() {
  const firstYear = 2020;
  const lastYear = 1900;
  for (i = firstYear; i >= lastYear; i--) {
    console.log(i);
  }
}

allYears();
