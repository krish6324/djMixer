import * as React from 'react';
import { Text, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

   var presses=1;
class Button4 extends React.Component {

   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://krish6324.github.io/sound/NEFFEX%20-%20Grateful%20[Copyright%20Free].mp3' },
      { shouldPlay: true }
    );
   } 

  render() {
    return (
      <View>
   
      <TouchableOpacity
        style={
         styles.button
        }

        onPress={this.playSound}
        >
        <Text
          style={
           styles.buttonText
          }>
          start greatfull
        </Text>
      </TouchableOpacity>


 

      
     </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
   
      marginTop: 20,  
      width: 300,
      height:40,
      backgroundColor: 'orange'
      
         
  },
  buttonText:{
            textAlign:'center',
            fontWeight: 'bold',
            fontSize: 20
  }
})
export default  Button4;