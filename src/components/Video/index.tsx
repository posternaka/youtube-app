import React from 'react'
import styles from './video.module.scss';

const Video = () => {
  return (
    <div className={styles.video}>
        <img src="https://via.placeholder.com/468x60" alt="" />

        <h3>Название</h3>
        <h4>Описание</h4>
    </div>
  )
}

export default Video