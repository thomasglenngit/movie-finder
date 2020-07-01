import { MovieService } from "./../src/movies-service.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

$(document).ready(function () {
  $("#movie-form").submit(function (event) {
    event.preventDefault();
    const movie = $("#movieSearch").val();
    $("#movieSearch").val("");
    console.log(movie);
    (async () => {
      let movieService = new MovieService();
      const response = await movieService.getMovieSelection(movie);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        // console.log("display:" + response);
        $(".list").append(
          `"<li>" The official title of ${movie} is ${response.results[0].title}"</li>"`
        );
        $(".list").append(
          `"<li>" Here's what it's about: ${response.results[0].overview} "<li>"`
        );
      } else {
        // console.log("error:" + response);
        $(".list").append(`"<li>" No movies for you!"</li>"`);
        $(".list").append(
          `"<li>" Please check your inputs and try again! "</li>"`
        );
      }
    }
  });
});
