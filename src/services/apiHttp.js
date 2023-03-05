import axios from 'axios'
import { User, Activity, Performance, AverageSessions } from '../models'

export default class ApiHttp {
  /**
   * Initialise the API call
   *
   * @param {String} apiUrl
   */
  constructor(apiUrl) {
    this.axiosInstance = axios.create({
      baseURL: apiUrl+'/user'
    })
  }

  /**
   * Return a promise with an User model
   *
   * @param {Number} id ID of the user
   * @returns {Promise}
   */
  async getUser(id) {
    const userId = parseInt(id, 10)
    const result = await this.axiosInstance.get(`/${ userId }`)
      .then(response => response)
      .catch(error => console.warn(error.message))

    const data = result?.status === 200
      ? result?.data?.data
      : {}
    const userModel = new User(data)

    return userModel
  }

  /**
   * Return a promise with an Activity model
   *
   * @param {Number} id
   * @returns {Promise}
   */
  async getUserActivity(id) {
    const userId = parseInt(id, 10)
    const result = await this.axiosInstance.get(`/${ userId }/activity`)
      .then(response => response)
      .catch(error => console.warn(error.message))

    const data = result?.status === 200
      ? result?.data?.data
      : {}
    const activityModel = new Activity(data)

    return activityModel
  }

  /**
   * Return a promise with an AverageSessions model
   *
   * @param {Number} id
   * @returns {Promise}
   */
  async getUserAverageSessions(id) {
    const userId = parseInt(id, 10)
    const result = await this.axiosInstance.get(`/${ userId }/average-sessions`)
      .then(response => response)
      .catch(error => console.warn(error.message))

    const data = result?.status === 200
      ? result?.data?.data
      : {}
    const averageSessionsModel = new AverageSessions(data)

    return averageSessionsModel
  }

  /**
   * Return a promise with a Performance model
   *
   * @param {Number} id
   * @returns {Promise}
   */
  async getUserPerformance(id) {
    const userId = parseInt(id, 10)
    const result = await this.axiosInstance.get(`/${ userId }/performance`)
      .then(response => response)
      .catch(error => console.warn(error.message))

    const data = result?.status === 200
      ? result?.data?.data
      : {}
    const performanceModel = new Performance(data)

    return performanceModel
  }
}
