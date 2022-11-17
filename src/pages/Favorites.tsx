import React from 'react'

const Favorites = () => {
  return (
    <div className='container'>
      { [...new Array(6)].map(_ => <div className='cart'>Hi</div>) }
    </div>
  )
}

export default Favorites