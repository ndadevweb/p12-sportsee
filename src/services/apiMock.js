import usersMock from '../mocks/users.json'
import usersActivityMock from '../mocks/usersActivity.json'
import usersAverageSessionsMock from '../mocks/usersAverageSessions.json'
import usersPerformanceMock from '../mocks/usersPerformance.json'
import { User, Activity, Performance, AverageSessions } from '../models'

export default class ApiMock {
  /**
   * Return an User model with data of the user
   *
   * @param {Number} id ID of the user
   * @returns {User}
   */
  getUser(id) {
    const userId = parseInt(id, 10)
    const { data } = usersMock
    const user = data
      .filter(user => user.id === userId)
      .at(0)
    const userModel = new User(user)

    return userModel
  }

  /**
   * Return an Activity model with data of the user
   *
   * @param {Number} ID of the user
   * @returns {Activity}
   */
  getUserActivity(id) {
    const userId = parseInt(id, 10)
    const { data } = usersActivityMock
    const activity = data
      .filter(activity => activity.userId === userId)
      .at(0)
    const activityModel = new Activity(activity)

    return activityModel
  }

  /**
   * Return a Performance model with data of the user
   *
   * @param {Number} ID of the user
   * @returns {Performance}
   */
  getUserPerformance(id) {
    const userId = parseInt(id, 10)
    const { data } = usersPerformanceMock
    const performance = data
      .filter(performance => performance.userId === userId)
      .at(0)
    const performanceModel = new Performance(performance)

    return performanceModel
  }

  /**
   * Return an AverageSessions model with data of the user
   *
   * @param {Number} ID of the user
   * @returns {AverageSessions}
   */
  getUserAverageSessions(id) {
    const userId = parseInt(id, 10)
    const { data } = usersAverageSessionsMock
    const averageSessions = data
      .filter(averageSessions => averageSessions.userId === userId)
      .at(0)
    const averageSessionsModel = new AverageSessions(averageSessions)

    return averageSessionsModel
  }
}
