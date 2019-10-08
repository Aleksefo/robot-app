import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DpadScreen = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text>DpadScreen component</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
});

export default DpadScreen;
