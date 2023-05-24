import PropTypes from 'prop-types'
import styles from './MessageInformation.module.css'

/**
 * Show message based on the user's results
 *
 * @param {Object} param
 * @param {String} param.type
 * @throws {Error} Type does not exist
 *
 * @returns <MessageInformation />
 */
export default function MessageInformation({ type }) {
  switch(type) {
    case 'congratulation':
      return <p className={ styles.messageInformation }>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

    default:
      throw new Error('Type does not exist.')
  }
}

MessageInformation.propTypes = {
  type: PropTypes.oneOf(['congratulation']).isRequired
}
