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
  
  


  // React.useEffect(() => {
  //   dispatch(fetchPizza())
  // }, []);
  

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
      {video.items.map((it: any, index: number) => (
          <div key={index} className={style.cart} >
            <p>{it.etag}</p>
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