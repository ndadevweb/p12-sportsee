import { NavLink } from 'react-router-dom'
import { Icon } from '../../'
import styles from './Secondary.module.css'

/**
 * Vertical navigation
 *
 * @returns {React.ReactComponent}
 */
export default function Secondary() {
  return (
    <div className={ `grid-item-2 ${ styles.secondary }` }>
      <nav>
        <ul>
          <li><NavLink to="/"><Icon name="yoga" /></NavLink></li>
          <li><NavLink to="/"><Icon name="swim" /></NavLink></li>
          <li><NavLink to="/"><Icon name="bike" /></NavLink></li>
          <li><NavLink to="/"><Icon name="fitness" /></NavLink></li>
        </ul>
      </nav>
      <div className={ styles.copyright }>Copyright, SportSee 2020</div>
    </div>
  )
}
