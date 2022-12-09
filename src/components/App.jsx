import Searchbar from "./Searchbar/Searchbar";
import { Component } from "react";

export default class App extends Component {
  state = {
    images: {}
  };


  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=30502346-d120979d6222d217ab4c63b0e&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(images => this.setState({ images }));
}

  handleFormSubmit = searchRequest => {
    fetch(
      `https://pixabay.com/api/?q={searchRequest}&page=1&key=30502346-d120979d6222d217ab4c63b0e&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(images => this.setState({ images }));
}
  }
  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.images && <div>{this.state.hits}</div>}
      </div>
    );
  };
}