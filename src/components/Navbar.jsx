import { Link } from 'react-router-dom';

import { useLogout } from '../hooks/useLogout';

import './Navbar.css';
import Temple from '../assets/temple.svg';

export default function Navbar() {
  const { logout, isPending } = useLogout();

  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Dojo logo' />
          <h1>The Dojo</h1>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          {!isPending ? (
            <button className='btn' onClick={logout}>
              Logout
            </button>
          ) : (
            <button className='btn' disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
