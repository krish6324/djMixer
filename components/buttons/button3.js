import * as React from 'react';
import { Text, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

   var presses=1;
class Button3 extends React.Component {

   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://krish6324.github.io/sound/Kanye%20West%20-%20Stronger.mp3' },
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
          start stronger
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
      backgroundColor: 'blue'
      
         
  },
  buttonText:{
            textAlign:'center',
            fontWeight: 'bold',
            fontSize: 20
  }
})
export default  Button3;