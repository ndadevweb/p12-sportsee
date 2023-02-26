import { NavLink } from 'react-router-dom'
import Logo from '../../Logo/Logo'
import styles from './Primary.module.css'

export default function Primary() {
  return (
    <nav className={ styles.primary }>
      <Logo />

      <ul>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/profile">Profil</NavLink></li>
        <li><NavLink to="/settings">Réglage</NavLink></li>
        <li><NavLink to="/community">Communauté</NavLink></li>
      </ul>
    </nav>
  )
}
