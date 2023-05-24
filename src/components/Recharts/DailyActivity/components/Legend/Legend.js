import PropTypes from 'prop-types'
import classes from './Legend.module.css'

/**
 * A Legend component to replace
 * default Recharts Legend
 *
 * For more informations about props
 * of the Legend component visit
 * the link below
 *
 * https://recharts.org/en-US/api/Legend
 *
 * @param {Object} param
 * @param {Array<Object>} param.payload
 * @returns <Legend />
 */
export default function Legend({ payload }) {
  const labels = {
    kilogram: 'Poids (kg)',
    calories: 'Calories brûlées (Kcal)'
  }

  return (
    <div className={ classes.container }>
      <h4>Activité quotidienne</h4>

      <ul>
        { payload.map((data, index) => <li key={ index }>{ labels[data.value] }</li>) }
      </ul>
    </div>
  )
}

Legend.defaultProps = {
  payload: []
}

Legend.propTypes = {
  payload: PropTypes.array.isRequired
}
