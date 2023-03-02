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
   * Return an object array with the sessions
   * activity of the user
   *
   * @returns {Array<Object>}
   */
  getSessions() {
    const sessions = this
      ?.data
      ?.sessions
      ?.map(session => ({
        day: session?.day || '0000-00-00',
        kilogram: parseInt(session?.kilogram, 10) || 0,
        calories: parseInt(session?.calories, 10) || 0
      })) || []

      return sessions
  }
}
