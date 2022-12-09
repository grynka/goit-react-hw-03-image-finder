import { render } from "@testing-library/react";
import { Component } from "react";

export default class App extends Component {
  state = {
    images: {}
  };


  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=30502346-d120979d6222d217ab4c63b0e'
    )
      .then(res => res.json())
      .then(console.log);
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
          color: '#010101'
        }}
      >
       {this.state.images && <div>картинки...</div>}
      </div>
    );
  };
}