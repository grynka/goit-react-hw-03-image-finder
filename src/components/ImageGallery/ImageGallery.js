import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import { Component } from "react";
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";

export default class ImageGallery extends Component {
  state = {
    images: '',
    loading: false,
    page: null,
    error: ""
  };

  loadMore = () => {
    console.log(this.state.page);
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchImages !== this.props.searchImages ||
      prevState.page !== this.state.page
    ) {
      this.loadImages();
    }
  }

  loadImages = () => {
    const URL = 'https://pixabay.com/api/';
    const key = '30502346-d120979d6222d217ab4c63b0e';

    this.setState({ loading: true });
     console.log(this.state.images);

    fetch(
      `${URL}?key=${key}&q=${this.props.searchImages}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
    )
      .then(res => res.json())
      .then(hits => this.setState((prevState) => ({ images: [...prevState.images, ...hits.hits], error: '' })))
      .catch(error => this.setState({error: 'Error while loading data. Try again later.'}))
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <Gallery className="gallery">
          {loading && <Loader />}
          {images &&
            images.map(image => (
              <ImageGalleryItem key={image.id}> {image}</ImageGalleryItem>
            ))}
        </Gallery>
        <button onClick={this.loadMore} />
      </>
    );
  }
}

