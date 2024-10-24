import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQ2YzU1YzJjYmYyMjg3NDBjNjYzYThmY2M0NTQ1MiIsIm5iZiI6MTcyODQ3MzA5NC44NTQ4LCJzdWIiOiI2NzA2MTRhOGE4ODYxNGQ2YjA4YWNlNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UhyTtoYh7gIUfOrIpzoLnarfAKypn6WNJ7SJ92SsBMM'
  }
})



export default instance
