import React, { useReducer } from 'react';
import { Text, StyleSheet , View , Button , FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorBoxR = (props) => {

  const increment = 10;



  

  return (
    <View>

  
       <ColorCounter 
          title="Red" 
          onIncrease={() => } 
          onDecrease={() => } />
        <ColorCounter 
          title="Green" 
          onIncrease={() => } 
          onDecrease={() => } />
        <ColorCounter 
          title="Blue" 
          onIncrease={() => } 
          onDecrease={() => } />

        <View 
           style={{
             height:100,
             width:100,
             backgroundColor: `rgb(${red},${green},${blue})`
           }}>

        </View>

  </View>
  )  

        
};

const randomRgb = () => {

    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ColorBoxR;
