import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from '../components/SearchBar';
import yelp from "../api/yelp";

const HomeScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');
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

  return (
    <View style={styles.background}>
      <SearchBar 
        term={searchTerm} 
        onTermChange={()=>setSearchTerm(term)}
        onSubmit = {callYelpApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Results: {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white'
  }
});

export default HomeScreen;
