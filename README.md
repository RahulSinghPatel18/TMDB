create a left and right side div

left all sidenav content hover effect

right all topnav content - search input, cross icon

map the seraches data image with onfocus using useref

topnav- serch target value to axios for api call show name and images for TMDB api

name- {s.name || s.title || s.original_title || s.original_name} 

img - {s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage}

noimage defualt noimage show in serachbar

baseUrl : 'https://api.themoviedb.org/3

 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjQ2YzU1YzJjYmYyMjg3NDBjNjYzYThmY2M0NTQ1MiIsIm5iZiI6MTcyODQ3MzA5NC44NTQ4LCJzdWIiOiI2NzA2MTRhOGE4ODYxNGQ2YjA4YWNlNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UhyTtoYh7gIUfOrIpzoLnarfAKypn6WNJ7SJ92SsBMM'

next is infinite-scrooling 

trending page pe  dropdown data day, week, moview page, popular,tvshow

trending- (`trending/${category}/${duration}?page=${page})
popular- (`/${category}/popular?page=${page}`)
movies- (`/movie/${category}?page=${page}`)
tvshow- (`/tv/${category}?page=${page}`)

create a react redux toolkit and setup

inside reducer 3 Slice create movieslice, personslice, tvslice

dynamics routes create for movie, tv , person

create moviedetals page, tvdetails page and person detail page


learn find out the api and run the api postmen and get the TMDB data according to the data wo display more informations,  api-(get, create), redux toolkit-(store, reducers, actions), useref, useloaction, useSelector, useParams, usedispatch, state, props,

react player install for videoplay & infinite scrolling in react & horizontal scrolling 
import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
<ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />r4


