/**
 * Manage the performance data of the user
 */
export default class Performance {
  /**
   * Data get from the API or mock file
   *
   * @param {Object} data
   */
  constructor(data) {
    this.kindData = data
    this.kinds = []
  }

  /**
   * ID of the user
   *
   * @returns {Number}
   */
  getUserId() {
    return parseInt(this?.kindData?.userId, 10) || 0
  }
}
