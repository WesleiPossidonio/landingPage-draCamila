import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-dra-camila-galiza.vercel.app/',
})

export default api
