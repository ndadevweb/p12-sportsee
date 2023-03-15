import PropTypes from 'prop-types'
import { Card } from '../../../../../components'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ActiveDotCustom, TooltipCustom, LegendCustom } from './components'

/**
 * Show sessions duration
 *
 * @param {Object} param
 * @param {Array<Object>} param.userAverageSessions
 * @returns {React.ReactComponentElement}
 */
export default function SessionDuration({ userAverageSessions }) {

  const userAverageSessionsOverloaded = [
    {
      day: 0,
      sessionLength: userAverageSessions[1].sessionLength
    },
    ...userAverageSessions,
    {
      day: 8,
      sessionLength: userAverageSessions[userAverageSessions.length - 1].sessionLength
    }
  ]

  const getDayLetterByIndex = (day) => {
    const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

    return days[day]
  }

  const activeDotIndexExcluded = [0, 8]

  return (
    <Card type="cardMedium" color="cardRed">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={ 500 }
          height={ 300 }
          data={ userAverageSessionsOverloaded }
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >

          <XAxis
            dataKey="day"
            tickFormatter={ (day) => getDayLetterByIndex(day) }
            tick={{ stroke: '#FFF', fill: '#FFF', fontSize: '12px', opacity: 0.5 }}
            stroke="transparent"
          />

          <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide={ true } />

          <Tooltip
            hideIndex={ activeDotIndexExcluded }
            content={ <TooltipCustom /> }
            wrapperStyle={{ outline: 'none' }}
            cursor={ false }
          />

          <Legend content={() => <LegendCustom /> } verticalAlign="top" width={ 180 } />

          <defs>
            <linearGradient id="colorSessions" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopOpacity="0.25" stopColor="#FFF" />
              <stop offset="100%" stopOpacity="1" stopColor="#FFF" />
            </linearGradient>
          </defs>

          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorSessions)"
            dot={ false }
            activeDot={ (props) => <ActiveDotCustom hideIndex={ activeDotIndexExcluded } {...props } />}
            strokeWidth={ 2 }
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

SessionDuration.propTypes = {
  userAverageSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}
