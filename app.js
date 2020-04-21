const auth = "473f199aa9777eeb3eee1a72e97e7d45";
let topRated = document.querySelector('.data-container1');
let upComing = document.querySelector('.data-container2');







//Fetching the api

async function fetchApi(url){
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${url}`,{
       params : {
        api_key:auth,
        page:1
       }
   });
   return response;
}
//fetching the data
async function getData(data,toAppend){
    data.data.results.forEach((result)=>{
        const div  = document.createElement("div");
        // div.classList.add("data-container");
        div.innerHTML = `
        <div class="data-con">
        <h3> ${result.original_title}</h3>
        <div class="data-con-img">
        <img src="https://image.tmdb.org/t/p/w200${result.poster_path}"> </img>
        </div>
        </div>
        `
        toAppend.appendChild(div);
        });
}

//Top Rated movies
async function getTopRatedMovies(){
    const data = await fetchApi("top_rated");
    const append = getData(data,topRated);
    
}
//upcoming movies
async function getUpComingMovies(){
    const data = await fetchApi("upcoming");
    const append = getData(data,upComing);
}
getUpComingMovies();
getTopRatedMovies();
