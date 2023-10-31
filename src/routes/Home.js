import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    
  const [loading, setLoading] = useState(true);
  const [movies, setMovies]= useState([]);
  const getMoives=async()=>{
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(movies);
  };
  useEffect(()=>{
    getMoives();
  },[]);
  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <ol>{movies.map(item=><Movie id={item.id} key={item.id} coverImg={item.medium_cover_image} title={item.title} summary={item.summary} genres={item.genres}/>)}</ol>}
    </div>
  );
};

export default Home;