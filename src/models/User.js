/**
 * Manage the data of the user
 */
export default class User {
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
  getId() {
    return parseInt(this.data?.id, 10) || 0
  }

  /**
   * User's firstname
   *
   * @returns {String}
   */
  getFirstname() {
    return this.data?.userInfos?.firstName || 'unknown'
  }

  /**
   * User's firstname
   *
   * @returns {String}
   */
  getLastname() {
    return this.data?.userInfos?.lastName || 'unknown'
  }

  /**
   * User's age
   *
   * @returns {Number}
   */
  getAge() {
    return this.parseInt(this.data?.userInfos?.age, 10) || 0
  }

  /**
   * Score of the user
   *
   * @returns {Number}
   */
  getTodayScore() {
    const score = this.data?.todayScore || this.data?.score || 0
    const scoreToPercent = score * 100

    return scoreToPercent
  }

  /**
   * Calories burned
   *
   * @returns {Number}
   */
  getCalories() {
    return parseInt(this.data?.keyData?.calorieCount, 10) || 0
  }

  /**
   * Protein burned
   *
   * @returns {Number}
   */
  getProtein() {
    return parseInt(this.data?.keyData?.proteinCount, 10) || 0
  }

  /**
   * Carbohydrate burned ( glucides )
   *
   * @returns {Number}
   */
  getCarbohydrate() {
    return parseInt(this.data?.keyData?.carbohydrateCount, 10) || 0
  }

  /**
   * Lipid burned
   *
   * @returns {Number}
   */
  getLipid() {
    return parseInt(this.data?.keyData?.lipidCount, 10) || 0
  }

  /**
   * Return a litteral object with formatted data
   *
   * - calorieCount
   * - proteinCount
   * - carbohydrateCount
   * - lipitCount
   *
   * @returns {Object}
   */
  getKeyData() {
    return {
      calorieCount: this.getCalories().toLocaleString('en-US')+'kCal', // In accordance with the figma design
      proteinCount: this.getProtein()+'g',
      carbohydrateCount: this.getCarbohydrate()+'g',
      lipidCount: this.getLipid()+'g'
    }
  }
}
