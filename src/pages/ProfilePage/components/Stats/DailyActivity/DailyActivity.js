import PropTypes from 'prop-types'
import { Card } from '../../../../../components'

/**
 * Show daily activity
 *
 * @param {Object} param
 * @param {Array<Object>} param.sessions
 * @returns {React.ReactComponentElement}
 */
export default function DailyActivity({ userActivity }) {
  return (
    <Card type="cardLarge" color="cardDefault">
      {/* Graphique bar */}
    </Card>
  )
}

DailyActivity.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}
