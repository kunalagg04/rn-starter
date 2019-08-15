import React, { useState } from 'react';
import { Text, StyleSheet , View , Button , FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorBox = (props) => {

  const increment = 10;

  //console.log(props)
  const [red , setRed] = useState(255);
  const [green , setGreen] = useState(255);
  const [blue , setBlue] = useState(255);
  //console.log(colors);

  const setColor = (color,change) => {
    switch(color){
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;  

    }
  }

  return (
    <View>

  
       <ColorCounter 
          title="Red" 
          onIncrease={() => setColor('red' , increment )} 
          onDecrease={() => setColor('red', -1*increment)} />
        <ColorCounter 
          title="Green" 
          onIncrease={() => setColor('green' , increment )} 
          onDecrease={() => setColor('green', -1*increment)} />
        <ColorCounter 
          title="Blue" 
          onIncrease={() => setColor('blue' , increment )} 
          onDecrease={() => setColor('blue', -1*increment)} />

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

export default ColorBox;
