import * as React from 'react';
import { Text, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

   var presses=1;
class Button5 extends React.Component {

   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://krish6324.github.io/sound/Alex-Amos-Not-Afraid.mp3' },
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
          start not Afraid
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
      backgroundColor: 'green'
      
         
  },
  buttonText:{
            textAlign:'center',
            fontWeight: 'bold',
            fontSize: 20
  }
})
export default  Button5;