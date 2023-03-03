import { useState, useEffect } from 'react'
import ServiceApi from '../services/api'

/**
 *
 * @param {Number} userId
 * @returns
 */
export default function useFetchApi(userId) {
  const [ isLoading, setIsLoading] = useState(true)
  const [dataFromAPI, setDataFromAPI] = useState({
    user: {},
    userActivity: {},
    userAverageSessions: {},
    userPerformance: {}
  })

  useEffect(() => {
    async function fetchData(userId) {
      try {
        const user = await ServiceApi.getUser(userId)
        const userActivity = await ServiceApi.getUserActivity(userId)
        const userPerformance = await ServiceApi.getUserPerformance(userId)
        const userAverageSessions = await ServiceApi.getUserAverageSessions(userId)

        setDataFromAPI({
          user,
          userActivity,
          userPerformance,
          userAverageSessions
        })
      } catch(error) {
        console.log('error', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData(userId)
  }, [userId])

  return [dataFromAPI, isLoading]
}
