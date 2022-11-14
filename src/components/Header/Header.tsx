import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__flex}>
          
          <div className={styles.header_nav}>
            <FontAwesomeIcon icon={faFilm} className={styles.logo} />

            <ul>
              <li><Link to="/">Search</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>

          </div>

          <div className={styles.header_logOut}>
            <Link to="/login" onClick={() => localStorage.clear()}>Login Out</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header