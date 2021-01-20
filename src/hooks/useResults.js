import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const callYelpApi = async (term) => {
      try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: term,
            location: 'seattle'
          }
        });
        setResults(response.data.businesses);
      }
      catch (e){
        setErrorMessage('Something went wrong');
      }
    }
  
    useEffect(() => {callYelpApi('sushi')}, []);

    return [callYelpApi, results, errorMessage];
};