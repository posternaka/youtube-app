import React from 'react';
import style from './favoriteBlock.module.scss';

type Props = {
  setVisible: () => void;
}

const FavoriteBlock = () => {
  const arr: Array<string> = ['how', 'about', 'your', 'name', 'mr', 'unknown'];
  
  return ( 
    <>
      {arr && 
        arr.map((it, index) => (
          <div key={index} className={style.cart} >
            <p>{it}</p>
            <div className={style.cart__options} >
              <button >edit</button>
              <button >delete</button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default FavoriteBlock;