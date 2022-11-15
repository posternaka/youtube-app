import React from 'react'
import Video from '../components/Video'

const Home = () => {
  return (
    <div className='container'>
      <div className='search'>
      
        <h2>Search of videos</h2>
        <div className='block_search'>
          <input className='input_search' type="text" />
          <button className='but'>SEARCH</button>
        </div>

        <div className='page_video'>
          {[...new Array(6)].map(_ => <Video />)}
        </div>
    </div>
  </div>  
  )
}

export default Home