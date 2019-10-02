import React from 'react';
import {Alert, SafeAreaView, Text, TouchableHighlight} from 'react-native';

import RobotApi from '../api/robotApi';

const robotApi = RobotApi.create();

const identify = async () => {
  const response = await robotApi.identify();
  if (!response.ok) {
    Alert.alert(response.originalError.message);
  } else {
    Alert.alert('Identified');
  }
};

export const ControllerScreen = () => {
  return (
    <SafeAreaView>
      <Text>Controller</Text>
      <TouchableHighlight onPress={identify}>
        <Text>IDENTIFY</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
