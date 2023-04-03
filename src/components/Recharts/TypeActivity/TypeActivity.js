import PropTypes from 'prop-types'
import { Card } from '../../index'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'

/**
 * Show user's performances
 *
 * @param {Object} param
 * @param {Object} param.data
 * @param {Object} param.kind
 *
 * @returns {React.ReactComponentElement}
 */
export default function TypeActivity({ data, kind }) {

  const performances = data.map(performance => performance).reverse()

  const toTranslate = kindKey => {
    return {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité'
    }[kind[kindKey]]
  }

  return (
    <Card type="cardMedium" color="cardDark">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={ 90 } width={ 258 } height={ 263 } data={ performances }>
          <PolarGrid radialLines={ false } />
          <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFF', fontSize: '12px' }} tickFormatter={ toTranslate } />
          <Radar name="Mike" dataKey="value" stroke="transparent" fill="#FF0101" fillOpacity={ 0.7 } />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  )
}

TypeActivity.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    kind: PropTypes.number.isRequired
  })),
  kind: PropTypes.objectOf(PropTypes.string)
}
