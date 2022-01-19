import { Link } from 'react-scroll';
import './AppNav.css';

export default function AppNav() {
  return (
    <div className='app-nav'>
      <Link
        to='unity-app-1'
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className='app-nav-link'
        activeClass='app-nav-link-active'
      >
        Tidal Forces
      </Link>
      <p>|</p>
      <Link
        to='unity-app-2'
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        className='app-nav-link'
        activeClass='app-nav-link-active'
      >
        Roche Limit
      </Link>
      <p>|</p>
      <Link
        to='unity-app-3'
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        className='app-nav-link'
        activeClass='app-nav-link-active'
      >
        Tidal Locking
      </Link>
    </div>
  );
}
