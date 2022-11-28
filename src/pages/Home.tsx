import React from 'react'
import Video from '../components/Video';
import { IVideoSlice } from '../redux/video/types';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { fetchPizza } from '../redux/video/asyncAction';
import { setFavorites } from '../redux/video/slice';
import { v4 as uuidv4 } from 'uuid';

const Home: React.FC = () => {
  const [value, setValue] = React.useState('');
  const variables = ['—', '|'];
  const [layout, setLayout] = React.useState<number>(0);

  const dispatch = useAppDispatch();
  const { video } = useSelector<any, { video: IVideoSlice }>(state => state);
  console.log(video);
  
  
  // React.useEffect(() => {
  //   dispatch(fetchPizza())
  // }, []);

  return (
    <div className='container'>
      <div className='search'>
      
        <h2>Search of videos</h2>
        <div className='block_search'>
          <input className='input_search' value={value} onChange={(e: any) => setValue(e.target.value)} type="text" />
          <p className='plus' onClick={() => dispatch(setFavorites({id: uuidv4(), q: value, maxResult: 5, sort: 'decs'}))}>+</p>
          <button className='but' onClick={() => dispatch(fetchPizza(value))} >SEARCH</button>
        </div>
        <div className='information'>
          <h4>Video on demand: {value}<span>4289</span></h4>
          <ul className='layout'>
            {
              variables.map((it, index) => <li key={index} className={index === layout ? 'active' : ''} onClick={() => setLayout(index)}>{it}</li>)
            }
          </ul>
        </div>

        {
          video.items.map((it, index) => (
            <>
              
            

              <div className='page_video'>
                
                  <div key={index} className={layout ? 'video' : 'video lay'} >
                    <Video title={it.snippet.title} img={it.snippet.thumbnails.medium.url}/>
                  </div>
                
              </div>
            </>
        ))
      }
    </div>
  </div>  
  )
}

export default Home