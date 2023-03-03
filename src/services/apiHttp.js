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
      baseURL: apiUrl
    })
  }

  /**
   * Return an User model with data of the user
   *
   * @param {Number} id ID of the user
   * @returns {Promise}
   */
  async getUser(id) {
    const userId = parseInt(id, 10)
    const result = await this.axiosInstance.get(`/user/${ userId }`)
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

  async getUserActivity(id) {
    const userId = parseInt(id, 10)
    const result = await this.axiosInstance.get(`/user/${ userId }/activity`)
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

  async getUserAverageSessions(id) {
    return new AverageSessions({})
  }

  async getUserPerformance(id) {
    return new Performance({})
  }
}
