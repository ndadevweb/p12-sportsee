import { useParams } from 'react-router-dom'
import useFetchApi from '../../hooks/useFetchApi'
import {
  Hello, MessageInformation, Alert, Loading,
  DailyActivity, SessionDuration, TypeActivity, Score, Details
} from '../../components'
import classes from './ProfilePage.module.css'

/**
 * User Profil page
 *
 * @returns <ProfilePage />
 */
export default function ProfilePage() {
  const { id } = useParams()
  const [dataFromAPI, isLoading, errorData] = useFetchApi(id)

  return (
    <div className={ classes.container }>
      <Loading isActive={ isLoading } />
      {
        errorData !== null
          ? (
            <div className={ classes.alertContainer }>
              <Alert message="Impossible de récupérer les données associées à votre compte" />
            </div>
          )
          : isLoading === false ? (
            <>
              <div className={ classes.helloContainer }>
                <Hello firstname={ dataFromAPI.user.getFirstname() } />
                <MessageInformation type="congratulation" />
              </div>

              <div className={ classes.detailsContainer }>
                <Details keyData={ dataFromAPI.user.getKeyData() } />
              </div>

              <div className={ classes.dailyActivityContainer }>
                <DailyActivity userActivity={ dataFromAPI.userActivity.getSessions() } />
              </div>

              <div className={ classes.sessionsDurationContainer }>
                <SessionDuration userAverageSessions={ dataFromAPI.userAverageSessions.getSessions() } />
              </div>

              <div className={ classes.typeActivityContainer }>
                <TypeActivity { ...dataFromAPI.userPerformance.getKeyData() } />
              </div>

              <div className={ classes.scoreContainer }>
                <Score userScore={ dataFromAPI.user.getTodayScore() } />
              </div>
            </>
          ) : null
      }
    </div>
  )
}
