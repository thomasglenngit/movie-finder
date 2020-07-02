export class MovieService {
  constructor() {
  this.movieArray = [];
  }

  async getMovieSelection(movie) {
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movie}`
      );
      // console.log("api run:" + response);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }

  addMovieSelection(newResponse) {
    if (!newResponse) {
      return;
    } else {
      this.movieArray.push(newResponse.results[0]);
      console.log(this.movieArray);
      console.log(newResponse.results[0].title);
    }
  }
}

// promise.then(function(result) {
//   return promise = new Promise(function(resolve, reject) {
//     // do stuff
//   });
// })
// .then(function(result2) {
//     return promise2 = new Promise(function(resolve, reject) {
//       // do more stuff
//     });
//   })

// doAsync()
//   .then doAsync()
//   .then doAsync2()
//   .then doAsync3()
//   .then doAsync4()
//   .then doAsync5()