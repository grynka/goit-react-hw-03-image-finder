import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import { Component } from "react";

export default class ImageGallery extends Component {
    state = {
        images: null,
        loading: false
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchImages !== this.props.searchImages) {
          const URL = 'https://pixabay.com/api/';
          const key = '30502346-d120979d6222d217ab4c63b0e';

          fetch(
            `${URL}?key=${key}&q=${this.props.searchImages}&image_type=photo&orientation=horizontal&per_page=12`
          )
            .then(res => res.json())
              .then(hits => this.setState({ images:  hits.hits  }));
        }}
    
     render() {
    return (
      <Gallery className="gallery">
            {this.state.images && this.state.images.map((image) =>  <ImageGalleryItem> { image }</ImageGalleryItem> )}
      </Gallery>
    );
  }}

