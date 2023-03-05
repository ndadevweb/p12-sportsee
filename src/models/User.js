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
    this.userData = data
  }

  /**
   * ID of the user
   *
   * @returns {Number}
   */
  getId() {
    return parseInt(this?.userData?.id, 10) || 0
  }

  /**
   * User's firstname
   *
   * @returns {String}
   */
  getFirstname() {
    return this?.userData?.userInfos?.firstName || 'unknown'
  }

  /**
   * User's firstname
   *
   * @returns {String}
   */
  getLastname() {
    return this?.userData?.userInfos?.lastName || 'unknown'
  }

  /**
   * User's age
   *
   * @returns {Number}
   */
  getAge() {
    return parseInt(this?.userData?.userInfos?.age, 10) || 0
  }

  /**
   * Score of the user
   *
   * @returns {Number}
   */
  getTodayScore() {
    const score = this?.userData?.todayScore || this?.userData?.score || 0
    const scoreToPercent = score * 100

    return scoreToPercent
  }

  /**
   * Calories burned
   *
   * @returns {Number}
   */
  getCalories() {
    const value = parseInt(this?.userData?.keyData?.calorieCount, 10) || 0
    const formattedValue = new Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3
    }).format(value)

    return formattedValue
  }

  /**
   * Protein burned
   *
   * @returns {Number}
   */
  getProtein() {
    return parseInt(this?.userData?.keyData?.proteinCount, 10) || 0
  }

  /**
   * Carbohydrate burned ( glucides )
   *
   * @returns {Number}
   */
  getCarbohydrate() {
    return parseInt(this?.userData?.keyData?.carbohydrateCount, 10) || 0
  }

  /**
   * Lipid burned
   *
   * @returns {Number}
   */
  getLipid() {
    return parseInt(this?.userData?.keyData?.lipidCount, 10) || 0
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
