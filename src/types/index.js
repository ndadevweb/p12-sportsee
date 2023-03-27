/**
 * Custom PropTypes to check if
 * - props value is number
 * - props value is between 0 and 100
 *
 * @param {Object} props
 * @param {String} propName
 * @param {import("react").ReactComponentElement} componentName
 * @throws new Error(
      'Invalid prop `' + propName + '` supplied to `' + componentName + '`, expected `number`.'
    )
 * @throws new Error(
      'Invalid prop `' + propName + '` supplied to `' + componentName + '`, expected value must be between 0 and 100.'
    )
 * @returns {Error|null}
 */
export default function scoreValidator(props, propName, componentName) {
  const scoreValue = props[propName]

  if(typeof scoreValue !== 'number') {
    return new Error(
      'Invalid prop `' + propName + '` supplied to `' + componentName + '`, expected `number`.'
    )
  }

  if(scoreValue < 0 || scoreValue > 100) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to `' + componentName + '`, expected value must be between 0 and 100.'
    )
  }

  return null
}
