import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTZlMzQxMDEzOTE2N2M5OGYxZTVkNDdmNzE3MTcxMyIsInN1YiI6IjY2M2U2MzgxNmNjMTRlZGMwZDUwNGQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcFeZSGVPRufT2pYf_hf9hnzNDIaWmCehwruUv2DWuU'
      }
})



export default instance