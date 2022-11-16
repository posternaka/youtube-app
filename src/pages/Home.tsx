import React from 'react'
import Video from '../components/Video'

const Home = () => {
  const variables = ['—', '|'];
  const [layout, setLayout] = React.useState(0);

  return (
    <div className='container'>
      <div className='search'>
      
        <h2>Search of videos</h2>
        <div className='block_search'>
          <input className='input_search' type="text" />
          <button className='but'>SEARCH</button>
        </div>

        <div className='information'>
          <h4>Video on demand: "Травничество"<span>4289</span></h4>
          <ul className='layout'>
            {
              variables.map((it, index) => <li className={index === layout ? 'active' : ''} onClick={() => setLayout(index)}>{it}</li>)
            }
          </ul>
        </div>

        <div className='page_video'>
          { [...new Array(6)].map(_ => <Video props={layout} />) }
        </div>
    </div>
  </div>  
  )
}

export default Home