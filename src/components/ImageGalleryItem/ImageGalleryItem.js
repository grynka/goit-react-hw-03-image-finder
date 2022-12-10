
const ImageGalleryItem  = ({ image }) => {
    return (
      <li class="gallery-item" key={image.id}>
        <img src={image.webformatURL} alt={image.largeImageURL} />
      </li>
    );
  }

export default ImageGalleryItem