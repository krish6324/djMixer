import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View >
      <Text style={styles.text} >DJ Mixer</Text>
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  
  text:{
    marginTop:20,
      fontSize: 22,
     fontWeight: 'bold',
 textAlign: 'center'

  }
});
export default AppHeader;