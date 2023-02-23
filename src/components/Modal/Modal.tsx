import { SyntheticEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Popup } from './Modal.styled';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const onPressEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [onClose]);

  const onBackdropClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Popup>{children}</Popup>
    </Backdrop>,
    document.querySelector('#modal-root') as HTMLElement
  );
};

export default Modal;
