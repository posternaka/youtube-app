import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}> 
        <span>😕</span>
        <h1>Not found :(</h1>
        <p className={styles.description}>К сожалению данная страница отсутствует</p>
    </h1>
  )
}

export default NotFoundBlock;