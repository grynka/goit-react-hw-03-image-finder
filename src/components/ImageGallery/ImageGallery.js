import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";

export default class ImageGallery extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.images !== this.props.images) {
        
    }}
    
     render() {
    return (
        <ul className="gallery">
            <p>{this.props.images}</p>            
      </ul>
    );
  }}

