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
    this.performanceData = data
  }

  /**
   * ID of the user
   *
   * @returns {Number}
   */
  getUserId() {
    return parseInt(this?.performanceData?.userId, 10) || 0
  }

  /**
   * Get key data with labels ( kind )
   * and associated values ( data )
   *
   * @returns {Object}
   */
  getKeyData() {
    return {
      kind: this?.performanceData.kind,
      data: this?.performanceData.data
    }
  }
}
