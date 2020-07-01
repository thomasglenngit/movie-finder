import { MovieService } from "./../src/movies-service.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

$(document).ready(function () {
  $("#movie-form").submit(function (event) {
    event.preventDefault();
    let movie = $("#movieSearch").val();
    $("#movieSearch").val("");

  
    (async () => {
      let movieService = new MovieService();
      const response = await movieService.getMovieSelection(movie);
      getElements(response, movie);
    })();

    function getElements(response, movie) {
      if (response) {
        // console.log("display:" + response.results[0].title);
        $("#list").append(
          `<li> The official title of ${movie} is ${response.results[0].title}</li>`
        );
        $("#list").append(
          `<li> Here's what it's about: ${response.results[0].overview} <li>`
        );
        $("#list").append(`<img src=https://image.tmdb.org/t/p/w500${response.results[0].poster_path}></img>`);
      } else {
        // console.log("error:" + response);
        $("#list").append(`"<li>" No movies for you!"</li>"`);
        $("#list").append(
          `<li> Please check your inputs and try again! </li>`
        );
      }
    }
  });

  $("#addMovie").click(function () {
    MovieService.addMovieSelection();
  });

});
