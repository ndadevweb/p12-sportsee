import PropTypes from 'prop-types'

/**
 * Return an icon image by name
 *
 * @param {Object} param
 * @param {String} param.name Icon key
 * @throws Key does not exist
 *
 * @returns {React.ReactComponent}
 */
export default function Icon({ name }) {
  const path = `/assets/icons/icon-${ name }.svg`

  switch(name) {
    case 'yoga':
    case 'swim':
    case 'bike':
    case 'fitness':
    case 'calories':
    case 'protein':
    case 'carbs':
    case 'fat':
      return <img src={ path } alt={ name } />

    default:
      throw new Error('Key does not exist.')
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}
