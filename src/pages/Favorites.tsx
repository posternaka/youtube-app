import React from 'react';
import FavoriteBlock from '../components/Favorites';

const Favorites = () => {
  return (
    <div className='container'>
      { [...new Array(6)].map(_ => <FavoriteBlock />) }
    </div>
  )
}

export default Favorites