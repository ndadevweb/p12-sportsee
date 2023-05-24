/**
 * Manage the activity sessions data of the user
 */
export default class Activity {
  /**
   * Data get from the API or mock file
   *
   * @param {Object} data
   */
  constructor(data) {
    this.activityData = data
  }

  /**
   * ID of the user
   *
   * @returns {Number}
   */
  getUserId() {
    return parseInt(this?.activityData?.userId, 10) || 0
  }

  /**
   * Return an object array with the sessions
   * activity of the user
   *
   * @returns {Array<Object>}
   */
  getSessions() {
    const sessions = this
      ?.activityData
      ?.sessions
      ?.map((session, index) => ({
        day: new Date(session?.day || '0000-00-00').getDate(),
        kilogram: parseInt(session?.kilogram, 10) || 0,
        calories: parseInt(session?.calories, 10) || 0
      })) || []

      return sessions
  }

  /**
   * Check activityData exist
   *
   * @returns {Boolean}
   */
  hasData() {
    return Object.keys(this.activityData).length !== 0
  }
}
