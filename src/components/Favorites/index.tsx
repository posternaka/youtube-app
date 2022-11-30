import React from 'react';
import style from './favoriteBlock.module.scss';
import ModalWindow from '../ModalWindow/ModalWindow';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { fetchPizza } from '../../redux/video/asyncAction';


const FavoriteBlock = () => {
  const [dataI, setDataI] = React.useState([]);
  const dispatch = useAppDispatch();
  const { video } = useSelector<any, any>(state => state);
  
  const [isVisibleModal, setIsVisibleModal] = React.useState<boolean>(false);
  const [currentElement, setCurrentElement] = React.useState<string>('');

  const handleSetState = (it: string) => {
    setIsVisibleModal(true);
    setCurrentElement(it);
  }


  
  return ( 
    <>
      {isVisibleModal ? <ModalWindow title={currentElement} onClose={() => setIsVisibleModal(false)}/> : null}
      {video.favoriteRequest.map((it: any, index: number) => (
          <div key={index} className={style.cart} >
            <p>{it.q}</p>
            <div className={style.cart__options} >
              <button onClick={() => handleSetState(it.q)}>edit</button>
              <button >delete</button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default FavoriteBlock;