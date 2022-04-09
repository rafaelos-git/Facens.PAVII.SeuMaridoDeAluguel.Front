import axios from 'axios'

const api = axios.create({
    baseURL: 'http://162.214.160.241:3339'
})

export default api