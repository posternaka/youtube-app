import React from 'react'
import styles from './video.module.scss';

type Props = {
  props: number;
}

const Video = ({props: Props}) => {
  const [layout, setLayout] = React.useState(false);

  return (
    <div className={layout ? styles.video : `${styles.video} ${styles.layout}`} >
        <img src="https://via.placeholder.com/468x300" alt="" />

        <div className='video__info'>
          <h3>Что такое травничество, рассказывает ...</h3>
          <p>Травничество - это сбор различных видов трав ...</p>
          <p>Просмотров: 124124</p>
        </div>
    </div>
  )
}

export default Video