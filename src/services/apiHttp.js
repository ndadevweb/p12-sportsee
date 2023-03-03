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
      .catch(error => console.log(error.message))

    let userModel = null

    if(result.status === 200) {
      const { data } = result.data

      userModel = new User(data)
    } else {
      userModel = new User({})
    }

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
      .catch(error => console.log(error.message))

    let activityModel = null

    if(result.status === 200) {
      const { data } = result.data

      activityModel = new Activity(data)
    } else {
      activityModel = new Activity({})
    }

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
      .catch(error => [])

    let averageSessionsModel = null

    if(result.status === 200) {
      const { data } = result.data

      averageSessionsModel = new AverageSessions(data)
    } else {
      averageSessionsModel = new AverageSessions({})
    }

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
      .catch(error => [])

    let performanceModel = null

    if(result.status === 200) {
      const { data } = result.data

      performanceModel = new Performance(data)
    } else {
      performanceModel = new Performance({})
    }

    return performanceModel
  }
}
