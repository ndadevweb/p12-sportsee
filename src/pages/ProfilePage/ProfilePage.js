import {
  Hello, MessageInformation,
  DailyActivity, SessionDuration, TypeActivity, Score, Details
} from './components'
import styles from './ProfilePage.module.css'

export default function ProfilePage() {

  return (
    <div className={ styles.container }>
      <div className={ styles.helloContainer }>
        <Hello firstname="Nicolas" />
        <MessageInformation type="congratulation" />
      </div>

      <div className={ styles.detailsContainer }>
        <Details />
      </div>

      <div className={ styles.dailyActivityContainer }>
        <DailyActivity />
      </div>

      <div className={ styles.sessionsDurationContainer }>
        <SessionDuration />
      </div>

      <div className={ styles.typeActivityContainer }>
        <TypeActivity />
      </div>

      <div className={ styles.scoreContainer }>
        <Score />
      </div>
    </div>
  )
}
