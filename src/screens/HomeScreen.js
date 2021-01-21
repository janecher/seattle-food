import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const HomeScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [callYelpApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {return result.price === price});
  }

  return (
    <View style={styles.background}>
      <SearchBar 
        term={searchTerm} 
        onTermChange={(term)=>setSearchTerm(term)}
        onSubmit = {() => callYelpApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title="$" resultsList = {filterResultsByPrice('$')}/>
        <ResultsList title="$$" resultsList = {filterResultsByPrice('$$')}/>
        <ResultsList title="$$$" resultsList = {filterResultsByPrice('$$$')}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default HomeScreen;
