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


        {[...new Array(6)].map(it => <Video />)}
    </div>
  </div>  
  )
}

export default Home