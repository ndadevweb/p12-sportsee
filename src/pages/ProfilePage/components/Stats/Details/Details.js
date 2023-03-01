import PropTypes from 'prop-types'
import { Card, Icon } from '../../../../../components'
import styles from './Details.module.css'

export default function Details({ keyData }) {
  return (
    <>
      <Card type="cardSmall" color="cardDefault">
        <div className={ styles.content }>
          <Icon name="calories" />

          <p className={ styles.informations }>
            <span className={ styles.values }>1,930</span>
            <span className={ styles.type }>Calories</span>
          </p>
        </div>
      </Card>

      <Card type="cardSmall" color="cardDefault">
        <div className={ styles.content }>
          <Icon name="protein" />

          <p className={ styles.informations }>
            <span className={ styles.values }>155g</span>
            <span className={ styles.type }>Proteines</span>
          </p>
        </div>
      </Card>

      <Card type="cardSmall" color="cardDefault">
        <div className={ styles.content }>
          <Icon name="carbs" />

          <p className={ styles.informations }>
            <span className={ styles.values }>290g</span>
            <span className={ styles.type }>Glucides</span>
          </p>
        </div>
      </Card>

      <Card type="cardSmall" color="cardDefault">
        <div className={ styles.content }>
          <Icon name="fat" />

          <p className={ styles.informations }>
            <span className={ styles.values }>50g</span>
            <span className={ styles.type }>Lipides</span>
          </p>
        </div>
      </Card>
    </>
  )
}

Details.propTypes = {

}