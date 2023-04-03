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
 * @param {Array<Object>} param.payload
 * @returns {React.ReactComponentElement}
 */
export default function Tooltip({ payload }) {
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
  payload: []
}

Tooltip.propTypes = {
  payload: PropTypes.array.isRequired
}
