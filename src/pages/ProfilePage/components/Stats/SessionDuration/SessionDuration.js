import PropTypes from 'prop-types'
import { Card } from '../../../../../components'

/**
 * Show sessions duration
 *
 * @param {Object} param
 * @param {Array<Object>} param.sessions
 * @returns {React.ReactComponentElement}
 */
export default function SessionDuration({ session }) {
  return (
    <Card type="cardMedium" color="cardRed">
      {/* Graphique duree des sessions */}
    </Card>
  )
}

SessionDuration.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}