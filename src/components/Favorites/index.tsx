import React from 'react';
import style from './favoriteBlock.module.scss';

const FavoriteBlock = () => {
  return (
    <div className={style.cart}>
      <p>Name</p>
      <div className={style.cart__options}>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  )
}

export default FavoriteBlock;