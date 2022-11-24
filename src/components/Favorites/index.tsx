import React from 'react';
import style from './favoriteBlock.module.scss';
import ModalWindow from '../ModalWindow/ModalWindow';

const FavoriteBlock = () => {
  const arr: Array<string> = ['how', 'about', 'your', 'name', 'mr', 'unknown'];
  const [isVisibleModal, setIsVisibleModal] = React.useState<boolean>(false);
  const [currentElement, setCurrentElement] = React.useState<number>(0);

  const handleSetState = (index: number) => {
    setIsVisibleModal(true);
    setCurrentElement(index);
  }
  
  return ( 
    <>
      {isVisibleModal ? <ModalWindow title={arr[currentElement]} onClose={() => setIsVisibleModal(false)}/> : null}
      {arr && 
        arr.map((it, index) => (
          <div key={index} className={style.cart} >
            <p>{it}</p>
            <div className={style.cart__options} >
              <button onClick={() => handleSetState(index)}>edit</button>
              <button >delete</button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default FavoriteBlock;