import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import RobotApi from '../api/robotApi';
import {colors} from '../theme';
const robotApi = RobotApi.create();

const DpadScreen = props => {
  const turnLeft = () => {
    robotApi.turn(-45);
  };
  const turnRight = () => {
    robotApi.turn(45);
  };
  const goForward = () => {
    robotApi.move(0, 1);
  };
  const goBack = () => {
    robotApi.move(0, -1);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'blue', padding: 20}}>
      <Text>DpadScreen component</Text>
      <TouchableHighlight onPress={turnLeft}>
        <Text style={{fontSize: 72}}>⬅️</Text>
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
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
        <View
          style={{flex: 1, borderColor: colors.black, borderWidth: 2}}></View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
});

export default DpadScreen;
