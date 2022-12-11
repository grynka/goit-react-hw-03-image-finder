import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
      };
    });
  };

  render() {
    const { url, alt, largeImage } = this.props;
    return (
      <>
        <Item>
          <Image src={url} alt={alt} onClick={this.toggleModal} />
        </Item>
        {this.state.showModal && (
          <Modal largeImage={largeImage} alt={alt} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
