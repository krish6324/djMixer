import * as React from 'react';
import { Text, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';
   var presses=1;
class Button2 extends React.Component {
 
 
    playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://krish6324.github.io/sound/Hall%20of%20Fame%20-%20The%20Script.mp3' },
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
     start Half Of Flame
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
      backgroundColor: 'yellow'
      
         
  },
  buttonText:{
            textAlign:'center',
            fontWeight: 'bold',
            fontSize: 20
  }
})
export default  Button2;