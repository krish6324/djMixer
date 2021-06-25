import * as React from 'react';
import { Text, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';


class Stop extends React.Component {

  

  render() {
    return (
      <View>
   
      <TouchableOpacity
        style={
         styles.button
        }

        onPress={()=>{
          Audio.setIsEnabledAsync(false);
        }}
        >
        <Text
          style={
           styles.buttonText
          }>
         stop
        </Text>
      </TouchableOpacity>


 

      
     </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
       marginTop:20,
       height:40,
      marginleft:20,  
      width: 300,
      
      backgroundColor: 'brown'
      
         
  },
  buttonText:{
            textAlign:'center',
            fontWeight: 'bold',
            fontSize: 20
  }
})
export default  Stop;