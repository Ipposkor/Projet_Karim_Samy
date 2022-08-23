import Card from './component/card/Card';

function App() {
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=1d3ead8417a1330e1bfbf4195f564f62&language=en-US&page=1').then((response)=>{
      setMovies(response.data.results)
    }).catch(err=>{console.log(err)})
  },[])

  return (
    <div className="App">
      <Switch>
        
        <Route path={"/"}>
          {movies.map((item,index)=>{
            return <Card key={index} item={item} />
          })}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
