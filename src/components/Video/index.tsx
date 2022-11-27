import React from 'react'
import styles from './video.module.scss';

type Props = {
  title: string,
  img: string
}

const Video = ({ title, img }: Props) => {
  

  return (
    <>
        <img src={img} alt="" />

        <div className='video__info'>
          <h3>{title}</h3>
          <p>Травничество - это сбор различных видов трав ...</p>
          <p>Просмотров: 124124</p>
        </div>
    </>
  )
}

export default Video;