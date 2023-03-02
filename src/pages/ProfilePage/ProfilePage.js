import { useParams } from 'react-router-dom'
import ServiceApi from '../../services/api'
import {
  Hello, MessageInformation,
  DailyActivity, SessionDuration, TypeActivity, Score, Details
} from './components'
import styles from './ProfilePage.module.css'

export default function ProfilePage() {
  const { id } = useParams()
  const user = ServiceApi.getUser(id)
  const userActivity = ServiceApi.getUserActivity(id)
  const userPerformance = ServiceApi.getUserPerformance(id)
  const userAverageSessions = ServiceApi.getUserAverageSessions(id)

  return (
    <div className={ styles.container }>
      <div className={ styles.helloContainer }>
        <Hello firstname={ user.getFirstname() } />
        <MessageInformation type="congratulation" />
      </div>

      <div className={ styles.detailsContainer }>
        <Details keyData={ user.getKeyData() } />
      </div>

      <div className={ styles.dailyActivityContainer }>
        <DailyActivity userActivity={ userActivity.getSessions() } />
      </div>

      <div className={ styles.sessionsDurationContainer }>
        <SessionDuration userAverageSessions={ userAverageSessions.getSessions() } />
      </div>

      <div className={ styles.typeActivityContainer }>
        <TypeActivity />
      </div>

      <div className={ styles.scoreContainer }>
        <Score userScore={ user.getTodayScore() } />
      </div>
    </div>
  )
}
