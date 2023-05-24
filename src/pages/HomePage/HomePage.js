import { NavLink } from 'react-router-dom'
import classes from './HomePage.module.css'

/**
 * HomePage with list of user links
 *
 * @returns <HomePage />
 */
export default function HomePage() {
  return (
    <section className={ classes.container }>
      <ul>
        <li><h2>Choisir un profil</h2></li>
        <li><NavLink to="/profile/12">Profil 12</NavLink></li>
        <li><NavLink to="/profile/18">Profil 18</NavLink></li>
        <li><NavLink to="/profile/42">Profil inexistant</NavLink></li>
      </ul>
    </section>
  )
}
