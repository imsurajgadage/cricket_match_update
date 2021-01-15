import React,{useState, useEffect} from 'react';
import './App.css';
import MyCard from './components/MyCard';
import NavBar from './components/NavBar';
import { getMatches } from './api';
import { Grid } from '@material-ui/core';


function App() {

  const [matches, setMatches] = useState([]);

  useEffect(()=>{
      const fetchAPI = async ()=>{
          const data = await getMatches()
          setMatches(data.matches)
      }
      fetchAPI();
  },[])


  return (
    <>
    <NavBar />
    <Grid container>
      <Grid sm="2"></Grid>
      <Grid sm="8">
      {
      matches.map((match)=>(
        <>
        {match.type === "Twenty20" ? (
           <MyCard key={match.unique_id} match={match} />
        ) : (
            null
        )}
        </>
      ))
    }
      </Grid> 
    </Grid>
    
    </>
  );
}

export default App;

/*
https://cricapi.com/api/matches?apikey=yHyfCl9uAVbzWSMn1AiP2L32dLO2
*/