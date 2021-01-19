import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.background}>
      <SearchBar 
        term={searchTerm} 
        onTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
        onSubmit = {() => callYelpApi(searchTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white'
  }
});

export default HomeScreen;
