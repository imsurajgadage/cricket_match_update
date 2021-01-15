import axios from 'axios';

//const [matches, setMatches] = useState();
// const API_KEY = process.env.API_KEY;

const API_KEY = 'yHyfCl9uAVbzWSMn1AiP2L32dLO2';


const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

export const getMatches = async ()=>{
    const {data} = await axios.get(url);
    
    return data;
}

// Load match Details

export const getMatchDetails = async (id) =>{
    
    const urlOfCricketScore = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    const {data} = await axios.get(urlOfCricketScore);
    console.log(data);
    return data;
}


