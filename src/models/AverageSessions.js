/**
 * Manage the average sessions data of the user
 */
export default class AverageSessions {
  /**
   * Data get from the API or mock file
   *
   * @param {Object} data
   */
  constructor(data) {
    this.averageSessionsData = data
  }

  /**
   * ID of the user
   *
   * @returns {Number}
   */
  getUserId() {
    return parseInt(this?.averageSessionsData?.userId, 10) || 0
  }

  /**
   * Return an object array with the
   * average sessions of the user
   *
   * @returns {Array<Object>}
   */
  getSessions() {
    const sessions = this?.averageSessionsData
      ?.sessions
      ?.map((session, index) => ({
        day: parseInt(session?.day, 10) || index + 1,
        sessionLength: parseInt(session?.sessionLength, 10) || 0
      })) || []

      return sessions
  }
}