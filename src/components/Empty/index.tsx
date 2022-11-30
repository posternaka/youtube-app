import { Link } from 'react-router-dom';

import emptyUrl from '../../assets/img/empty-cart.png';

function Empty() {
  return (
    <div className="container container--cart">
        <div className="cart cart--empty">
        <h2> You have not added anything to your favorites 😕</h2>
        <p>
            Most likely, you have not yet added the search phrase to your favorites. <br />
            In order for you to add it, go to the main page.
        </p>
        <img src={emptyUrl} alt="Empty cart" />
        <Link to="/" className="button button--black">
            <span>Come back</span>
        </Link>
        </div>
    </div>
  )
}

export default Empty;