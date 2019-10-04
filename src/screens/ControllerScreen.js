import React from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../theme';
import RobotApi from '../api/robotApi';
import {Button} from '../components/Button';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button title="Identify" onPress={identify} active />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: colors.leghtGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
