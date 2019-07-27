import React, { Component } from 'react';
import Movie from '../movie/Movie';

export default class MovieList extends Component {
  render() {
    const movies = Object.keys(this.props.movies).map(key => {
      let movie = this.props.movies[key];
      return (
        <Movie
          key={movie.id}
          name={movie.name}
          favoritedBy={this.isMovieFavorite(key, this.props.profiles)}
          users={this.props.users}
        />
      );
    });

    return <div>{movies}</div>;
  }

  isMovieFavorite(movieId, profiles) {
    let profilesWithFavoriteMovie = profiles.filter(
      profile => movieId === profile.favoriteMovieID
    );
    return profilesWithFavoriteMovie ? profilesWithFavoriteMovie : false;
  }
}
