import PropTypes from 'prop-types'
import classes from './Tooltip.module.css'

/**
 * A Tooltip component to replace
 * default Recharts Tooltip
 *
 * For more informations about props
 * of the Tooltip component visit
 * the link below
 *
 * https://recharts.org/en-US/api/Tooltip
 *
 * @param {Object} param
 * @param {boolean} param.active
 * @param {Array<Object>} param.payload
 * @returns {React.ReactComponentElement}
 */
export default function Tooltip({ active, payload }) {
  const units = {
    kilogram: 'kg',
    calories: 'Kcal'
  }

  return (
    <ul className={ classes.container }>
      { payload.map((data, index) => <li key={ index }>{ data.value }{ units[data.name] }</li>) }
    </ul>
  )
}

Tooltip.defaultProps = {
  active: false,
  payload: []
}

Tooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired
}
