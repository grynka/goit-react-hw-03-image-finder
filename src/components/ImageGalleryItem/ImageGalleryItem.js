import { Component } from "react";

export default class ImageGalleryItem extends Component {
  
  render() {
        return (
          <li key={this.props.children[1].id}>
                      <img src={this.props.children[1].webformatURL} />
          </li>
        );
  }

  }

