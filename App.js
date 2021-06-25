import React, { Component } from 'react';
import { Button ,Text,View} from 'react-native';
import AppHeader from './components/appHeadder';
import Button1 from './components/buttons/button1';
import Button2 from './components/buttons/button2';
import Button3 from './components/buttons/button3';
import Button4 from './components/buttons/button4';
import Button5 from './components/buttons/button5';
import Stop from './components/buttons/stop';
import Start from './components/buttons/start';


export default class App extends Component {

  render(){
   return(
     <View>
     <AppHeader/>
      <Button1/>
      <Button2/>
      <Button3/>
      <Button4/>
       <Button5/>
        <Stop/>
       <Start/>
     </View>
   )
  }
}
