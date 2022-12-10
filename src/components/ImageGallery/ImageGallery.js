import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import { Component } from "react";
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";

export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    page: null,
  };

  loadMore = () => {
    console.log(this.state.page)
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImages !== this.props.searchImages || prevState.page !== this.state.page) {
      const URL = 'https://pixabay.com/api/';
      const key = '30502346-d120979d6222d217ab4c63b0e';

      this.setState({ loading: true, page: prevState.page + 1 });
      console.log(this.state)

      fetch(
        `${URL}?key=${key}&q=${this.props.searchImages}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page + 1}`
      )
        .then(res => res.json())
        .then(hits => this.setState({ images: [...this.state.images],  hits }))
        .finally(this.setState({ loading: false }));
    }
  }
  render() {
    const { images, loading, page } = this.state;
    return (
      <>
        <Gallery className="gallery">
          {loading && <Loader />}
          {images &&
            images.map(image => <ImageGalleryItem key={image.id}> {image}</ImageGalleryItem>)}
        </Gallery>
        {page && <button onClick={this.loadMore}>load more...</button>}
      </>
    );
  }
}

