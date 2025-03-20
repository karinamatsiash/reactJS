import React, { Component } from "react";

class GenreSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreList: props.genreList || [],
    };
  }

  isSelectedGenre = (genre) => genre === this.props.selectedGenre;

  render() {
    return React.createElement(
      "div",
      {
        style: {
          padding: "20px",
          backgroundColor: '#232323',
          color: 'white',
          fontFamily: 'Montserrat'
        }
      },
      React.createElement(
        "ul",
        null,
        ...this.state.genreList.map((genre, index) => React.createElement(
          'li',
          {
            key: index,
            onClick: () => this.props.onSelect(genre),
            style: {
              borderBottom: this.isSelectedGenre(genre) ? '4px solid #f65261' : '3px solid #424242',
              boxShadow: this.isSelectedGenre(genre) ? 'none' : '0px 1px 0px #080707',
              cursor: 'pointer',
              display: 'inline-block',
              padding: '15px 10px',
              fontSize: '16px',
              fontWeight: '500'
            },
          },
          genre
        ))
      ),
    );
  }
}

export default GenreSelect;