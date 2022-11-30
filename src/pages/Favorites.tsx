import React from 'react';
import FavoriteBlock from '../components/Favorites';
import Empty from '../components/Empty';

import { useSelector } from 'react-redux';
import { IVideoSlice } from '../redux/video/types';

const Favorites = () => {
  const { video } = useSelector<any, { video: IVideoSlice }>(state => state);


  return (
    <>
          
      <div className='container'>
        <div className='favorites'>
            {video.favoriteRequest.length ? <FavoriteBlock /> : <Empty />}
        </div>
      </div>
    </>
  )
}

export default Favorites