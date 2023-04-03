import PropTypes from 'prop-types'
import { Card, Icon } from '../../index'
import styles from './Details.module.css'

/**
 * Show informations burned
 *
 * @param {Object} param
 * @param {String} param.calorieCount
 * @param {String} param.proteinCount
 * @param {String} param.carbohydrateCount
 * @param {String} param.lipidCount
 * @returns {React.ReactComponentElement}
 */
export default function Details({ keyData }) {
  const {
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount
  } = keyData

  return (
    <>
      <Card type="cardSmall" color="cardDefault">
        <div className={ styles.content }>
          <Icon name="calories" />

          <p className={ styles.informations }>
            <span className={ styles.values }>{ calorieCount }</span>
            <span className={ styles.type }>Calories</span>
          </p>
        </div>
      </Card>

      <Card type="cardSmall" color="cardDefault">
        <div className={ styles.content }>
          <Icon name="protein" />

          <p className={ styles.informations }>
            <span className={ styles.values }>{ proteinCount }</span>
            <span className={ styles.type }>Proteines</span>
          </p>
        </div>
      </Card>

      <Card type="cardSmall" color="cardDefault">
        <div className={ styles.content }>
          <Icon name="carbs" />

          <p className={ styles.informations }>
            <span className={ styles.values }>{ carbohydrateCount }</span>
            <span className={ styles.type }>Glucides</span>
          </p>
        </div>
      </Card>

      <Card type="cardSmall" color="cardDefault">
        <div className={ styles.content }>
          <Icon name="fat" />

          <p className={ styles.informations }>
            <span className={ styles.values }>{ lipidCount }</span>
            <span className={ styles.type }>Lipides</span>
          </p>
        </div>
      </Card>
    </>
  )
}

Details.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.string.isRequired,
    proteinCount: PropTypes.string.isRequired,
    carbohydrateCount: PropTypes.string.isRequired,
    lipidCount: PropTypes.string.isRequired,
  }).isRequired
}
