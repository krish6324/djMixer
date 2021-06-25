import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';


class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: '../Imagine Dragons - Believer (320 kbps).mp3' },
      { shouldPlay: true }

    );
  }
}