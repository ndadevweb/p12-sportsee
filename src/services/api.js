import { ENV, API_URL } from '../configs/config'
import ApiMock from './apiMock'
import ApiHttp from './apiHttp'

const ServiceApi = ENV === 'prod'
  ? new ApiHttp(API_URL)
  : new ApiMock()

export default ServiceApi
