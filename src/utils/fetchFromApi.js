import axios from "axios";
const BASE_URL='https://youtube-v2.p.rapidapi.com'
const options = {
   
    url: BASE_URL,
    // params: {
    //   query: 'bobby lee',
    //   lang: 'en',
  
  
    // },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
  };
  
 
 export const fetchFromApi=async(url)=>{
    try {
        const {data} = await axios.get(`https://youtube-v2.p.rapidapi.com/${url}`,options);
        // console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
  }