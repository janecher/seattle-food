import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import RestaurantDetail from "./RestaurantDetail";

const ResultsList = ({title, resultsList}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList data={resultsList} 
                renderItem = { ({item}) => {return <RestaurantDetail restaurant={item}/>}}
                keyExtractor = { result => result.id}
                horizontal = {true} 
                showsHorizontalScrollIndicator= {false}/>
    </View>);
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
      marginBottom: 15
  }
});

export default ResultsList;