import { Component } from 'react';
import { Button } from './Button/Button';
import { getMovies } from './services/api';
import { mapperFilms } from './utils/mapper';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
    poster: '',
  };

  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchMovies(page);
    }
  }

  fetchMovies = (page) => {
    this.setState({ isLoading: true });

    getMovies(page)
      .then(({ data }) =>
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...mapperFilms(data.results)],
        }))
      )
      .catch(console.log)
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handlerLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  toggleStatus = (id) => {
    console.log(id);
    const { movies } = this.state;
    const newMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, watched: !movie.watched };
      }
      return movie;
    });
    this.setState({ movies: newMovies });
  };

  openModel = (poster) => {
    this.setState({ poster });
  };

  closeModal = () => {
    this.setState({ poster: '' });
  };

  render() {
    const { movies, page, isLoading, poster } = this.state;
    return (
      <>
        {movies.length === 0 && (
          <Button
            text="Show films list"
            handleClick={() => this.fetchMovies(page)}
          />
        )}
        <MoviesGallery
          movies={movies}
          handleStatus={this.toggleStatus}
          handleModal={this.openModel}
        />
        {movies.length > 1 && (
          <Button text="Load more" handleClick={this.handlerLoadMore} />
        )}
        {isLoading && <p>Loading...</p>}
        {poster && <Modal poster={poster} closeModal={this.closeModal} />}
      </>
    );
  }
}

export default App;
