import React from 'react';
import { View , Text , Button } from 'react-native';

const ColorCounter = props => {
    return (
        <View>
            <Text>
                {props.color}
            </Text>
            <Button 
               title=" Increase"
               onPress = { () => props.onIncrease()}  />
            <Button
              title=" Decrease"
              onPress = { () => props.onDecrease()} />

    

        </View>
    )
}

export default ColorCounter;