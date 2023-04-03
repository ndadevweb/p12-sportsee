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
 * @param {boolean} param.active
 * @param {Array<Object>} param.payload
 * @returns {React.ReactComponentElement}
 */
export default function Tooltip({ payload, coordinate, hideIndex }) {

  const containerWidth = 258
  const coordinateX = parseInt(coordinate?.x || 0, 10)
  const widthOverlay = containerWidth - coordinateX

  return (
    <>
    { hideIndex.includes(payload[0]?.payload?.day) === true
      ? (<></>)
      : (
        <div className={ classes.wrapper } style={{
          width: widthOverlay+'px',
          marginLeft: coordinateX+'px'
        }}>
          <span className={ classes.box }>
            { payload[0]?.value } min
          </span>
        </div>
      )
    }
    </>
  )
}

Tooltip.defaultProps = {
  payload: [],
  coordinate: { x: 0, y: 0 },
  hideIndex: []
}

Tooltip.propTypes = {
  payload: PropTypes.array.isRequired,
  coordinate: PropTypes.object.isRequired,
  hideIndex: PropTypes.array.isRequired
}
