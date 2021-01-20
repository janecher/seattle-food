import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const HomeScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [callYelpApi, results, errorMessage] = useResults();
  return (
    <View style={styles.background}>
      <SearchBar 
        term={searchTerm} 
        onTermChange={()=>setSearchTerm(term)}
        onSubmit = {() => callYelpApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Results: {results.length}</Text>
      <ResultsList title="$"/>
      <ResultsList title="$$"/>
      <ResultsList title="$$"/>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white'
  }
});

export default HomeScreen;
