import React, { Component } from "react";
import Counter from "./module-1/components/Counter/Counter";
import SearchForm from "./module-1/components/SearchForm/SearchForm";
import GenreSelect from "./module-1/components/GenreSelect/GenreSelect";

const GENRES = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      genreList: GENRES,
      genre: GENRES[0],
    };
  }

  onSelect = (genre) => this.setState({ genre });

  render() {
    return React.createElement(
      "div",
      null,
      <Counter initialValue={1} />,
      <SearchForm initialValue="Movie" />,
      <GenreSelect
        genreList={this.state.genreList}
        selectedGenre={this.state.genre}
        onSelect={this.onSelect}
      />,
    );
  }
}

export default App;