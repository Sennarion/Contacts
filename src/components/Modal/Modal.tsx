import { SyntheticEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Popup } from './Modal.styled';

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  useEffect(() => {
    const onPressEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        alert();
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, []);

  const onBackdropClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      alert();
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
