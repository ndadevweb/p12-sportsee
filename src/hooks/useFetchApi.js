import { useState, useEffect } from 'react'
import ServiceApi from '../services/api'

/**
 * Fetch all user data from API
 *
 * @param {Number} userId
 * @returns {Array}
 */
export default function useFetchApi(userId) {
  const [isLoading, setIsLoading] = useState(true)
  const [dataFromAPI, setDataFromAPI] = useState({
    user: {},
    userActivity: {},
    userAverageSessions: {},
    userPerformance: {}
  })
  const [errorData, setErrorData] = useState(null)

  useEffect(() => {
    async function fetchData(userId) {
      try {
        if(errorData !== null) {
          return null
        }

        const user = await ServiceApi.getUser(userId)
        const userActivity = await ServiceApi.getUserActivity(userId)
        const userPerformance = await ServiceApi.getUserPerformance(userId)
        const userAverageSessions = await ServiceApi.getUserAverageSessions(userId)
        const allDataFetched = [
          user.hasData(),
          userActivity.hasData(),
          userPerformance.hasData(),
          userAverageSessions.hasData()
        ]

        if(allDataFetched.every((value) => value === true) === false) {
          throw new Error("Unable to get all data")
        }

        setDataFromAPI({
          user,
          userActivity,
          userPerformance,
          userAverageSessions
        })
      } catch(error) {
        setErrorData(error)

      } finally {
        setIsLoading(false)
      }
    }

    fetchData(userId)
  }, [userId, errorData])

  return [dataFromAPI, isLoading, errorData]
}
