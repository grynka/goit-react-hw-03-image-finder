import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modals } from './Modal.styled';

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    };

    handleKeydown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        };
    };

    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImage, alt } = this.props;
        const modalRoot = document.querySelector('#modal-root');
        
        return createPortal(
            <Overlay onClick={this.handleOverlayClick}>
                <Modals>
                    <img src={largeImage} alt={alt} />
                </Modals>
            </Overlay>,
            modalRoot,
        );
    };
}