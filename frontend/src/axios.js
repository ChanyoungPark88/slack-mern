import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://slack-mern-live.herokuapp.com/'
})

export default instance