import { NavLink } from 'react-router-dom'
import Logo from '../../Logo/Logo'
import styles from './Primary.module.css'

/**
 * Navigation horizontal
 *
 * @returns {React.ReactComponent}
 */
export default function Primary() {
  return (
    <nav className={ `grid-item-1 ${ styles.primary }` }>
      <div className={ styles.container }>
        <Logo />

        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/profile">Profil</NavLink></li>
          <li><NavLink to="/settings">Réglages</NavLink></li>
          <li><NavLink to="/community">Communauté</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
