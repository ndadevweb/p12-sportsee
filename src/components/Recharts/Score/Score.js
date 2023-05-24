import scoreValidator from '../../../types'
import { LegendCustom, RadialBarLabelCustom } from './components/'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import { Card } from '../../index'

/**
 *
 * @param {Object} props
 * @param {Number} props.userScore The value must be between 0 and 100
 * @returns <Score />
 */
export default function Score({ userScore }) {

  const data = [{ score: userScore }];

  return (
    <Card type="cardMedium" color="cardDefault">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          width={ 258 }
          height={ 263 }
          innerRadius="100%"
          outerRadius="100%"
          barSize={10}
          startAngle={ 90 }
          endAngle={ 450 }
          data={ data }
        >
          <RadialBar
            dataKey="score"
            cornerRadius={ 35 }
            background={ false }
            fill="#FF0000"
            label={ <RadialBarLabelCustom /> }
          />
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={ 0 } tick={ false } />
          <Legend
            verticalAlign={ 'top' }
            align={ 'left' }
            height={ 80 }
            content={ <LegendCustom />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </Card>
  )
}

Score.defaultProps = {
  userScore: 0
}

Score.propTypes = {
  userScore: scoreValidator
}
