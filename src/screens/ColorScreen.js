import React, { useState } from 'react';
import { Text, StyleSheet , View , Button , FlatList } from 'react-native';

const ColorScreen = (props) => {

  //console.log(props)
  const [colors , setColors] = useState([]);
  console.log(colors);

  return (

    

    <View>
        <Button title="Add a colour"
                onPress = { () => {
                    setColors([...colors , randomRgb()])
                }

                } 
                />

       
            <FlatList
            horizontal={true}
               keyExtractor={item => item}
               data={colors}
               renderItem = {({ item }) => {
                   return  <View style={{ height: 100 , width: 100 , backgroundColor : item}} />
               }}
               />

        </View>

        
    
  ) 
};

const randomRgb = () => {

    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ColorScreen;
