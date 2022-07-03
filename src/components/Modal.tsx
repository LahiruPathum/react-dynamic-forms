import React, { MouseEventHandler } from 'react';

type Props = {
  modalStyle?: Object;
  backdropStyle?: Object;
  children?: JSX.Element | JSX.Element[] | string;
  show: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
};

const Modal = ({
  modalStyle,
  children,
  show,
  onClose,
  backdropStyle,
}: Props) => {
  return (
    <div
      style={backdropStyle}
      className={`modal__wrap ${show ? 'visible' : ''}`}
    >
      <div style={modalStyle} className="modal">
        <div onClick={onClose} className="close__btn">
          <span>&times;</span>
        </div>
        <div className="modal_body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
