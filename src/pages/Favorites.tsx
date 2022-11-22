import React from 'react';
import FavoriteBlock from '../components/Favorites';
import ModalWindow from '../components/ModalWindow/ModalWindow';

const Favorites = () => {
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      if(modalRef.current && !e.composedPath().includes(modalRef.current)) {
        setIsVisiblePopup(false);
      } 
    };

    document.body.addEventListener('click', handleClickOut);

    return () => {
      document.body.removeEventListener('click', handleClickOut);
    };
  }, []);

  return (
    <div className='container'>
      <div className='favorites'>
      <div className='modal'>
        {isVisiblePopup ? <ModalWindow /> : ''}
      </div>
        { [...new Array(6)].map(_ => <FavoriteBlock />) }
      </div>
    </div>
  )
}

export default Favorites