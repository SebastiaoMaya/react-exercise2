import React, { Component } from 'react';
import Movie from '../movie/Movie';

export default class MovieList extends Component {
  render() {
    const moviesKeys = Object.keys(this.props.movies);

    return (
      <div>
        {moviesKeys.map(key => {
          let movie = this.props.movies[key];
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              favoritedBy={this.isMovieFavorite(key, this.props.profiles)}
              users={this.props.users}
            />
          );
        })}
      </div>
    );
  }

  /* {this.props.movies.map(movie => (
          <Movie
            id={movie.id}
            favorited={this.isMovieFavorite(movie.id, this.props.profiles)}
          />
        ))} */

  isMovieFavorite(movieId, profiles) {
    let profilesWithFavoriteMovie = profiles.filter(
      profile => movieId === profile.favoriteMovieID
    );
    return profilesWithFavoriteMovie ? profilesWithFavoriteMovie : false;
  }
}
