create a left and right side div

left all sidenav content hover effect

right all topnav content - search input, cross icon

map the seraches data image

topnav- serch target value to axios for api call show name and images for TMDB api

name- {s.name || s.title || s.original_title || s.original_name} 

img - {s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage}

noimage defualt noimage show in serachbar




