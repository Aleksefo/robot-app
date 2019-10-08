import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import RobotApi from '../api/robotApi';
const robotApi = RobotApi.create();

const DpadScreen = props => {
  const turnLeft = () => {
    robotApi.turn(-45);
  };
  const turnRight = () => {
    robotApi.turn(45);
  };
  const goForward = () => {
    robotApi.move(0, 2);
  };
  const goBack = () => {
    robotApi.move(0, -2);
  };
  const spin = () => {
    robotApi.bogie(-50);
    robotApi.bogie(50);
    robotApi.turn(360);
  };
  const sound = () => {
    robotApi.playsound('https://freesound.org/data/previews/49/49477_52325-lq.mp3', 20);
  }
  return (
    <View style={{flex: 1, backgroundColor: 'blue', padding: 20}}>
      <Text>DpadScreen component</Text>
      <TouchableHighlight onPress={turnLeft}>
        <Text style={{fontSize: 72}} >⬅️</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={turnRight}>
        <Text style={{fontSize: 72}}>➡️</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={goForward}>
        <Text style={{fontSize: 72}}>⬆️</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={goBack}>
        <Text style={{fontSize: 72}}>⬇️</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={spin}>
        <Text style={{fontSize: 72}}>♺</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={sound}>
        <Text style={{fontSize: 72}}>🔈</Text>
      </TouchableHighlight>
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
});

export default DpadScreen;
