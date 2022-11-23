import React from 'react';
import FavoriteBlock from '../components/Favorites';
import ModalWindow from '../components/ModalWindow/ModalWindow';


const Favorites = () => {
  const [isVisibleModal, setIsVisibleModal] = React.useState<boolean>(true);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      if(modalRef.current && !e.composedPath().includes(modalRef.current)) {
        setIsVisibleModal(false);
      } 
    };

    document.body.addEventListener('click', handleClickOut);

    return () => {
      document.body.removeEventListener('click', handleClickOut);
    };
  }, []);

  return (
    <>
      <div className='modal__block'>
        <div className='modal' ref={modalRef}>
              {isVisibleModal ? <ModalWindow
            isVisible={isVisibleModal}
            title="Modal Title"
            onClose={() => setIsVisibleModal(false)}
            /> : ''}
        </div>
      </div>
      <div className='container'>
        <div className='favorites'>
            <FavoriteBlock />
        </div>
      </div>
    </>
  )
}

export default Favorites