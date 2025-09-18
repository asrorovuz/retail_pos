import axios from 'axios'
import { TOKEN } from '../constants/app.constants'

export const AxiosBase = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
})

AxiosBase.interceptors.request.use((config) => {
  const token = sessionStorage.getItem(TOKEN) || btoa("998909422290:1128710")
  if (token) {
    config.headers['Authorization'] = `Basic ${token}`
  }
  return config
})
