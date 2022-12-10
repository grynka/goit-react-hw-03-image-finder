import { Component } from "react";
import { Item, Image } from "./ImageGalleryItem.styled";

export default class ImageGalleryItem extends Component {
  
  render() {
        return (
          <Item key={this.props.children[1].id}>
            <Image
              src={this.props.children[1].webformatURL}
              alt={this.props.children[1].tags}
            />
          </Item>
        );
  }

  }

