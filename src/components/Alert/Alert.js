import PropTypes from 'prop-types'
import classes from './Alert.module.css'

/**
 * Show an alert error message
 *
 * @param {Object} param
 * @param {String} param.message
 * @returns <Alert />
 */
export default function Alert({ message }) {
  return (
    <div>
      <p className={ classes.error }>{ message }</p>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}