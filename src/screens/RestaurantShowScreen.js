import React, {useState, useEffect} from "react";
import { View, StyleSheet, FlatList, Image, Text} from "react-native";
import yelp from "../api/yelp";

const RestaurantShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getRestaurantInfo = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getRestaurantInfo(id);
    }, []);

    if(!result) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', marginBottom: 10}}>{result.name}</Text>
            <FlatList 
                data = {result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {return <Image style = {styles.image} source={{uri: item}}/>}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        margin: 15
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10
    }
});

export default RestaurantShowScreen;