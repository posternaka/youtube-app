import React from 'react';

type Props = {
  title: string;
  onClose: () => void;
}

const ModalWindow = ({ title, onClose }: Props) => {
  console.log(title);
  
  
  const keydownHandler = ({ key }: any) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content"><p>Add your content here</p></div>
        </div>
        <div className="modal-footer" onClick={onClose}><button>Cancel</button></div>
      </div>
    </div>
  );
};

export default ModalWindow;