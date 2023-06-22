
import styles from './Navbar.module.css';
import Logo from '../images/LOGO.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useLogout } from '../Hooks/useLogout';
import { useAuthContext } from '../Hooks/useAuthContext';

const Navbar = () => {
      

    const location = useLocation();

    const isActive = (path) => {
    return location.pathname === path;
  }
  const {user} = useAuthContext()
  const {logout} = useLogout()
  const handleClick = () => {
    logout()
  }

    return ( 


    <header className={styles.navbar}>
      
     
      <NavLink to="/">
          <div className={styles.logo}>
            <img src={Logo} alt='Logo' />
            <h1>
                Learning Lair
            </h1>
          </div>
      </NavLink>

      <nav>
        <ul className={styles.menu} >

          <li className={isActive('/') ? styles.active : ''}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={isActive('/about') ? styles.active : ''}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={isActive('/terminal') ? styles.active : ''}>
            <NavLink to="/terminal">Terminal</NavLink>
          </li>
          <li className={isActive('/contact') ? styles.active : ''}>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          { user && (
              <div>
                <h2>{user.username}</h2>
                <button onClick={handleClick} className={styles.btn}>Log out</button>
              </div>
            )
          }
          {!user && (
              <div>
                <NavLink to="/signin">
                <button className={styles.btn}>Sign In</button>
                </NavLink>
              </div>
            )
          }

          
          
          
          
        </ul>
      </nav>
      
    </header>
        

     );
}
 
export default Navbar;