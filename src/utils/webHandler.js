import axios from 'axios'
import { KEYS } from '../constants/enum'
import AsyncStorage from '@react-native-async-storage/async-storage'

const apiRequest = async (options, headers = {}, id) => {
  const authToken = await AsyncStorage.getItem(KEYS.TOKEN)
  let schoolId = ''

  if (id) {
    schoolId = id
    await AsyncStorage.setItem(KEYS.SCHOOL_ID, id)
  } else {
    schoolId = await AsyncStorage.getItem(KEYS.SCHOOL_ID)
  }

  const BASE_URL = `https://${schoolId || ''}.readay.de/api/student/`

  const onSuccess = (response) => {
    return response
  }
  const onError = (error) => {
    return Promise.reject(error?.response || error?.message)
  }

  return axios({
    baseURL: BASE_URL,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
      ...headers
    }
  })
    .then(onSuccess)
    .catch(onError)
}

export default apiRequest