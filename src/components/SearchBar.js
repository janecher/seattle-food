import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle}></Feather>
        <TextInput 
            placeholder='Search' 
            style={styles.inputStyle} 
            value={term} 
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onSubmit}
        />
    </View>);
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputStyle: {
      flex: 1,
      fontSize: 18
  }
});

export default SearchBar;