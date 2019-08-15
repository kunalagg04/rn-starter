import React from 'react';
import { Text, StyleSheet , View , Button , TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {

  console.log(props)

  return (
    <View>

       <Text style={styles.text}>Hi there</Text>
           <Button 
                onPress = {() => props.navigation.navigate('ListScreen') } 
                 title = "Flat List"/>

              <Button 
                onPress = {() => props.navigation.navigate('Color') } 
                 title = "Colour Boxes"/>
              
              <Button 
                onPress = {() => props.navigation.navigate('ColorBox') } 
                 title = "Colour Box"/>

               <Button 
                onPress = {() => props.navigation.navigate('BoxScreen') } 
                 title = "Box Screen"/>

            
           

{/* <TouchableOpacity>
  <Text>
    Tocuh me
  </Text>
</TouchableOpacity> */}

    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
