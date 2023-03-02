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
    this.data = data
  }

  /**
   * ID of the user
   *
   * @returns {Number}
   */
  getUserId() {
    return parseInt(this?.data?.userId, 10) || 0
  }

  /**
   * Return an object array with the
   * average sessions of the user
   *
   * @returns {Array<Object>}
   */
  getSessions() {
    const sessions = this?.data
      ?.sessions
      ?.map((session, index) => ({
        day: parseInt(session?.day, 10) || index + 1,
        sessionLength: parseInt(session?.sessionLength, 10) || 0
      })) || []

      return sessions
  }
}