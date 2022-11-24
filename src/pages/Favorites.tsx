import React from 'react';
import FavoriteBlock from '../components/Favorites';



const Favorites = () => {
  
  // const modalRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   const handleClickOut = (e: MouseEvent) => {
  //     if(modalRef.current && !e.composedPath().includes(modalRef.current)) {
  //       setIsVisibleModal(false);
  //     } 
  //   };

  //   document.body.addEventListener('click', handleClickOut);

  //   return () => {
  //     document.body.removeEventListener('click', handleClickOut);
  //   };
  // }, []);

  return (
    <>
          
      <div className='container'>
        <div className='favorites'>
            <FavoriteBlock />
        </div>
      </div>
    </>
  )
}

export default Favorites