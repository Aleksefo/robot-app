import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const DpadScreen = props => {
  const turnLeft = () => {

  }
  const turnRight = () => {
    
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
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
});

export default DpadScreen;
