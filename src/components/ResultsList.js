import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import RestaurantDetail from "./RestaurantDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({title, resultsList, navigation}) => {

  if(!resultsList.length) {
      return null;
  }
  return (
    <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList data={resultsList} 
                renderItem = { ({item}) => {return <TouchableOpacity onPress={()=> navigation.navigate('RestaurantShow', {id: item.id})}><RestaurantDetail restaurant={item}/></TouchableOpacity>}}
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

export default withNavigation(ResultsList);