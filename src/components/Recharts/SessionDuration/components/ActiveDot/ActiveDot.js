import PropTypes from 'prop-types'

/**
 * An ActiveDot component to replace
 * default Recharts ActiveDot
 *
 * For more informations about props
 * of the Legend component visit
 * the link below
 *
 * https://recharts.org/en-US/api/Line#activeDot
 *
 * @param {Object} param
 * @param {Number} param.cx
 * @param {Number} param.cy
 * @param {Number} param.index
 * @param {Array<Number>} param.hideIndex
 * @returns <ActiveDot />
 */
export default function ActiveDot({ cx, cy, index, hideIndex }) {

  return (
    <>
      { hideIndex.includes(index) === true
          ? <></>
          : <circle
              cx={ cx }
              cy={ cy }
              stroke="#FFF"
              strokeOpacity={ 0.2 }
              strokeWidth={ 10 } r={ 5 }
              fill="#FFF"
            />
      }
    </>
  )
}

ActiveDot.defaultProps = {
  cx: 0,
  cy: 0,
  index: 0,
  hideIndex: []
}

ActiveDot.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  hideIndex: PropTypes.array.isRequired,
}
