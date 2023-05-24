import PropTypes from 'prop-types'
import { Card } from '../../index'
import { TooltipCustom, LegendCustom } from './components'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts'
/**
 * Show daily activity
 *
 * @param {Object} param
 * @param {Array<Object>} param.sessions
 * @returns <DailyActivity />
 */
export default function DailyActivity({ userActivity }) {
  return (
    <Card type="cardLarge" color="cardDefault">
      <ResponsiveContainer width="100%" height="95%">
        <BarChart
          width={ 730 }
          height={ 250 }
          data={ userActivity }
          barGap={ 8 }
          barSize={ 7 }
          margin={{ left: 40 }}
        >
          <CartesianGrid strokeDasharray="3 2" strokeOpacity={ 0.5 } vertical={ false } />
          <XAxis
            dataKey="day"
            tickLine={ false }
            strokeDasharray="1 1"
            strokeOpacity={ 0.1 }
            tickMargin="10"
          />
          <YAxis
            domain={['dataMin - 2', 'dataMax + 5']}
            allowDecimals={ false }
            orientation="right"
            axisLine={ false }
            tickLine={ false }
            yAxisId="kilogram"
          />
          <YAxis
            hide={ true }
            yAxisId="calories"
            domain={[0, 'dataMax + 20']}
          />
          <Tooltip content={ <TooltipCustom /> } wrapperStyle={{ outline: 'none'}} />
          <Legend
            verticalAlign={ 'top' }
            align={ 'right' }
            height={ 80 }
            content={ <LegendCustom />}
          />
          <Bar dataKey="kilogram" yAxisId="kilogram" fill="#282D30" radius={[ 3, 3, 0, 0 ]} />
          <Bar dataKey="calories" yAxisId="calories" fill="#E60000" radius={[ 3, 3, 0, 0 ]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

DailyActivity.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}
