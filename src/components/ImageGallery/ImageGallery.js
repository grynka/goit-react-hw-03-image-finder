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
  };

  loadMore = () => {
    console.log(this.state.page);
    this.setState({
      loading: true,
});
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.loadImages()
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchImages !== this.props.searchImages      
    ) {
      this.setState({  
        images: '',
        page: 1,
      })
      this.loadImages();
    }
  }

loadImages = () => {
    const URL = 'https://pixabay.com/api/';
    const key = '30502346-d120979d6222d217ab4c63b0e';
    console.log(this.state.images);
    this.setState({ loading: true });


    fetch (
      `${URL}?key=${key}&q=${this.props.searchImages}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page + 1}`
    )
      .then(res => res.json())
      .then(data => this.setState((prevState) => ({images: [...prevState.images, ...data.hits]}))
      )
      .catch(error => this.setState({error: 'Error while loading data. Try again later.'}))
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { images, loading, page } = this.state;
    return (
      <>
        <Gallery className="gallery">
           {images &&
            images.map(image => {
              return <ImageGalleryItem 
              key={image.id}
              url={image.webformatURL}
              alt={image.tags}
              largeImage={image.largeImageURL}
               />}
              
            )}
        </Gallery>
        {loading && <Loader />}
        {page && <Button onClick={this.loadMore} />}
      </>
    );
  }
}

