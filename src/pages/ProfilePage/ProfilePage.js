import { useParams } from 'react-router-dom'
import useFetchApi from '../../hooks/useFetchApi'
import {
  Hello, MessageInformation,
  DailyActivity, SessionDuration, TypeActivity, Score, Details
} from '../../components'
import styles from './ProfilePage.module.css'

export default function ProfilePage() {
  const { id } = useParams()
  const [dataFromAPI, isLoading] = useFetchApi(id)

  return (
    <div className={ styles.container }>
      { isLoading === true && 'Chargement' }

      { isLoading === false && (
        <>
          <div className={ styles.helloContainer }>
            <Hello firstname={ dataFromAPI.user.getFirstname() } />
            <MessageInformation type="congratulation" />
          </div>

          <div className={ styles.detailsContainer }>
            <Details keyData={ dataFromAPI.user.getKeyData() } />
          </div>

          <div className={ styles.dailyActivityContainer }>
            <DailyActivity userActivity={ dataFromAPI.userActivity.getSessions() } />
          </div>

          <div className={ styles.sessionsDurationContainer }>
            <SessionDuration userAverageSessions={ dataFromAPI.userAverageSessions.getSessions() } />
          </div>

          <div className={ styles.typeActivityContainer }>
            <TypeActivity { ...dataFromAPI.userPerformance.getKeyData() } />
          </div>

          <div className={ styles.scoreContainer }>
            <Score userScore={ dataFromAPI.user.getTodayScore() } />
          </div>
        </>
        )
      }
    </div>
  )
}
