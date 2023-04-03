import scoreValidator from '../../../../../types'
import classes from './Label.module.css'

/**
 *
 * @param {Object} props
 * @param {Number} props.score
 * @returns {ReactComponentElement}
 */
export default function Label({ value }) {

  return (
    <g>
      <foreignObject x={ 0 } y={ 0 } width={ '100%' } height={ '100%' }>
        <div className={ classes.containerCircle }>
          <p className={ classes.label }>
            <span className={ classes.value }>{ value }%</span>
            <br />
            <span className={ classes.text }>de votre objectif</span>
          </p>
        </div>
      </foreignObject>
    </g>
  )
}

Label.defaultProps = {
  value: 0
}

Label.propTypes = {
  value: scoreValidator
}
