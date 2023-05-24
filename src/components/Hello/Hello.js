import PropTypes from 'prop-types'
import styles from './Hello.module.css'

/**
 * Show Hello user's firstname
 *
 * @param {Object} param
 * @param {String} param.firstname
 * @returns <Hello />
 */
export default function Hello({ firstname }) {
  return <p className={ styles.hello }>Bonjour <span className={ styles.firstname }>{ firstname }</span></p>
}

Hello.defaultProps = {
  firstname: 'Unknow'
}

Hello.propTypes = {
  firstname: PropTypes.string.isRequired
}
