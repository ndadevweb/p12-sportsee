import PropTypes from 'prop-types'
import styles from './Card.module.css'

/**
 * Card that can contain children elements
 *
 * @param {Object} param
 * @param {String} param.type (cardSmall | cardMedium | cardLarge)
 * @param {String} param.color (cardDefault | cardRed | cardDark)
 * @param {React.ReactNode} children
 * @returns {React.ReactComponentElement}
 */
export default function Card({ type, color, children }) {
  const classesCard = [type, color].map(classArgument => styles[classArgument]).join(' ')

  return <div className={ `${ styles.card } ${ classesCard }` }>{ children }</div>
}

Card.propTypes = {
  type: PropTypes.oneOf(['cardSmall', 'cardMedium', 'cardLarge']).isRequired,
  color: PropTypes.oneOf(['cardDefault', 'cardRed', 'cardDark']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
