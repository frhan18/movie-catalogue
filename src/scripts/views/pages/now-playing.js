/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import TheMovieDbSource from '../../data/themoviedb-source';

import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
    <section id="movies-container">
        <div class="content mx-3 pt-3">
          <h2 class="content__heading">Sedang Tayang Di Bioskop</h2>
          <hr>
          <div id="movies" class="movies"></div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');

    movies.map((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
